using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Reconciliation;

namespace Reconciliation;

public class AccountService : ApplicationService, IAccountService
{
    private readonly IRepository<Account, Guid> _accountRepository;

    public AccountService(IRepository<Account, Guid> accountRepository)
    {
        _accountRepository = accountRepository;
    }

    public async Task<List<AccountDto>> GetListAsync()
    {
        var accounts = await _accountRepository.GetListAsync();
        return accounts.Select(
            account => new AccountDto
            {
                Id = account.Id,
                AccountName = account.AccountName,
                AccountNumber = account.AccountNumber,
                Description = account.Description
            }
        ).ToList();
    }

    public async Task<AccountDto> CreateAsync(AccountDto accountDto)
    {
        var account = await _accountRepository.InsertAsync(
            new Account
            {
                AccountName = accountDto.AccountName,
                AccountNumber = accountDto.AccountNumber,
                Description = accountDto.Description
            }
        );

        return new AccountDto
        {
            Id = account.Id,
            AccountName = account.AccountName,
            AccountNumber = account.AccountNumber,
            Description = account.Description
        };
    }

    public async Task DeleteAsync(Guid id)
    {
        await _accountRepository.DeleteAsync(id);
    }
}
