using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Reconciliation;

namespace Reconciliation;

public class TransactionService : ApplicationService, ITransactionService
{
    public readonly TransactionManager _transactionManager;

    public TransactionService(TransactionManager transactionManager)
    {
        _transactionManager = transactionManager;
    }

    public async Task<List<TransactionDto>> GetListAsync()
    {
        var transactions = await _transactionManager.GetListAsync();
        return transactions.Select(
            transaction => new TransactionDto
            {
                Id = transaction.Id,
                AccountId = transaction.AccountId,
                Amount = transaction.Amount,
                TransactionDate = transaction.TransactionDate
            }
        ).ToList();
    }

    public async Task<List<TransactionDto>> GetListByAccountIdAsync(Guid accountId)
    {
        var transactions = await _transactionManager.GetListByAccountIdAsync(accountId);
        return transactions.Select(
            transaction => new TransactionDto
            {
                Id = transaction.Id,
                AccountId = transaction.AccountId,
                Amount = transaction.Amount,
                TransactionDate = transaction.TransactionDate
            }
        ).ToList();
    }

    public async Task<TransactionDto> GetTransactionAsync(Guid transactionId)
    {
        var transaction = await _transactionManager.GetTransactionAsync(transactionId);
        return new TransactionDto
        {
            Id = transaction.Id,
            AccountId = transaction.AccountId,
            Amount = transaction.Amount,
            TransactionDate = transaction.TransactionDate
        };
    }

    public async Task<TransactionDto> CreateAsync(TransactionDto transactionDto)
    {
        if (!transactionDto.AccountId.HasValue)
        {
            throw new ArgumentException("AccountId is required when creating a transaction.");
        }

        var transaction = await _transactionManager.CreateAsync(transactionDto.AccountId.Value, transactionDto.Amount, transactionDto.TransactionDate);

        return new TransactionDto
        {
            Id = transaction.Id,
            AccountId = transaction.AccountId,
            Amount = transaction.Amount,
            TransactionDate = transaction.TransactionDate
        };
    }

    public async Task<TransactionDto> UpdateAsync(Guid transactionId, UpdateTransactionDto input)
    {
        var transaction = await _transactionManager.GetTransactionAsync(transactionId);

        if (input.AccountId.HasValue)
        {
            transaction.AccountId = input.AccountId.Value;
        }

        if (input.Amount.HasValue)
        {
            transaction.Amount = input.Amount.Value;
        }

        if (input.TransactionDate.HasValue)
        {
            transaction.TransactionDate = input.TransactionDate.Value;
        }

        var updated = await _transactionManager.UpdateAsync(transaction, transaction.AccountId, transaction.Amount, transaction.TransactionDate);

        return new TransactionDto
        {
            Id = transaction.Id,
            AccountId = transaction.AccountId,
            Amount = transaction.Amount,
            TransactionDate = transaction.TransactionDate
        };
    }

    public async Task DeleteAsync(Guid id)
    {
        await _transactionManager.DeleteAsync(id);
    }
}
