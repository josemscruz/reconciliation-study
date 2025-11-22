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
    Task<TransactionDto> GetTransactionAsync(Guid transactionId);
    Task<TransactionDto> CreateAsync(TransactionDto input);
    Task<TransactionDto> UpdateAsync(Guid transactionId, UpdateTransactionDto input);
    Task DeleteAsync(Guid id);
}

