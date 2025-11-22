using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Reconciliation;

namespace Reconciliation;

public class TransactionManager : DomainService
{
    public readonly IRepository<Transaction, Guid> _transactionManager;

    public TransactionManager(IRepository<Transaction, Guid> transactionRepository)
    {
        _transactionManager = transactionRepository;
    }

    public async Task<Transaction> GetTransactionAsync(Guid id)
    {
        return await _transactionManager.GetAsync(id);
    }

    public async Task<List<Transaction>> GetListAsync()
    {
        return await _transactionManager.GetListAsync();
    }
    public async Task<List<Transaction>> GetListByAccountIdAsync(Guid accountId)
    {
        return await _transactionManager.GetListAsync(t => t.AccountId == accountId);
    }

    public async Task DeleteAsync(Guid id)
    {
        await _transactionManager.DeleteAsync(id);
    }

    public async Task<Transaction> CreateAsync(Guid accountId, decimal amount, DateTime transactionDate)
    {
        var transaction = new Transaction
        {
            AccountId = accountId,
            Amount = amount,
            TransactionDate = transactionDate
        };

        return await _transactionManager.InsertAsync(transaction);
    }

    public async Task<Transaction> UpdateAsync(Transaction transaction, Guid accountId, decimal amount, DateTime transactionDate)
    {
        transaction.AccountId = accountId;
        transaction.Amount = amount;
        transaction.TransactionDate = transactionDate;

        return await _transactionManager.UpdateAsync(transaction);
    }
}