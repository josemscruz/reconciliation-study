using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Reconciliation;

namespace Reconciliation;

public interface IAccountService : IApplicationService
{
    Task<List<AccountDto>> GetListAsync();
    Task<AccountDto> CreateAsync(AccountDto input);
    Task DeleteAsync(Guid id);
}

