using System;
using Volo.Abp.Domain.Entities;

namespace Reconciliation;

public class Transaction : BasicAggregateRoot<Guid>
{
    public Guid AccountId { get; set; } = string.Empty;
    public Guid TransactionId { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public DateTime TransactionDate { get; set; }

}
