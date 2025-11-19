using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Reconciliation;

namespace Reconciliation;

public class AccountService : ApplicationService, IAccountService
{
    public readonly AccountManager _accountManager;

    public AccountService(AccountManager accountManager)
    {
        _accountManager = accountManager;
    }

    public async Task<List<AccountDto>> GetListAsync()
    {
        var accounts = await _accountManager.GetListAsync();
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

    public async Task<AccountDto> GetAsync(Guid accountId)
    {
        var account = await _accountManager.GetAsync(accountId);
        return new AccountDto
        {
            Id = account.Id,
            AccountName = account.AccountName,
            AccountNumber = account.AccountNumber,
            Description = account.Description
        };
    }

    public async Task<AccountDto> CreateAsync(AccountDto accountDto)
    {
        var account = await _accountManager.CreateAsync(accountDto.AccountName, accountDto.AccountNumber, accountDto.Description);

        return new AccountDto
        {
            Id = account.Id,
            AccountName = account.AccountName,
            AccountNumber = account.AccountNumber,
            Description = account.Description
        };
    }

    public async Task<AccountDto> UpdateAsync(Guid accountId, UpdateAccountDto input)
    {
        var account = await _accountManager.GetAsync(accountId);

        var updated = await _accountManager.UpdateAsync(account, input.AccountName, input.AccountNumber, input.Description);

        return new AccountDto
        {
            Id = account.Id,
            AccountName = updated.AccountName,
            AccountNumber = updated.AccountNumber,
            Description = updated.Description
        };
    }

    public async Task DeleteAsync(Guid id)
    {
        await _accountManager.DeleteAsync(id);
    }
}
