using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Reconciliation;

namespace Reconciliation;

public interface ITransactionService : IApplicationService
{
    Task<List<TransactionDto>> GetListAsync();
    Task<List<TransactionDto>> GetListByAccountIdAsync(Guid accountId);
    Task<TransactionDto> CreateAsync(TransactionDto input);
    Task DeleteAsync(Guid id);
}

