using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Reconciliation;

namespace Reconciliation;

public class TransactionService : ApplicationService, ITransactionService
{
    private readonly IRepository<Transaction, Guid> _transactionRepository;

    public TransactionService(IRepository<Transaction, Guid> transactionRepository)
    {
        _transactionRepository = transactionRepository;
    }

    public async Task<List<TransactionDto>> GetListAsync()
    {
        var transactions = await _transactionRepository.GetListAsync();
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
        var transactions = await _transactionRepository.GetListAsync(t => t.AccountId == accountId);
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

    public async Task<TransactionDto> CreateAsync(TransactionDto transactionDto)
    {
        var transaction = await _transactionRepository.InsertAsync(
            new Transaction
            {
                AccountId = transactionDto.AccountId,
                Amount = transactionDto.Amount,
                TransactionDate = transactionDto.TransactionDate
            }
        );

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
        await _transactionRepository.DeleteAsync(id);
    }
}