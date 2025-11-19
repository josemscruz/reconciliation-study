using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Reconciliation;

namespace Reconciliation;

public class AccountManager : DomainService
{
    public readonly IRepository<Account, Guid> _accountRepository;

    public AccountManager(IRepository<Account, Guid> accountRepository)
    {
        _accountRepository = accountRepository;
    }

    public async Task<Account> GetAsync(Guid id)
    {
        return await _accountRepository.GetAsync(id);
    }

    public async Task<List<Account>> GetListAsync()
    {
        return await _accountRepository.GetListAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        await _accountRepository.DeleteAsync(id);
    }

    public async Task<Account> CreateAsync(string name, string number, string description)
    {
        if (string.IsNullOrWhiteSpace(name)) throw new ArgumentException("Account name cannot be empty.");
        if (string.IsNullOrWhiteSpace(number)) throw new ArgumentException("Account number cannot be empty.");
        var account = new Account
        {
            AccountName = name,
            AccountNumber = number,
            Description = description
        };

        return await _accountRepository.InsertAsync(account);
    }
}