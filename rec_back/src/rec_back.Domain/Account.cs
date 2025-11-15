using System;
using Volo.Abp.Domain.Entities;
using System.Collections.Generic;

namespace Reconciliation;

public class Account : BasicAggregateRoot<Guid>
{
    public string AccountName { get; set; } = string.Empty;
    public string AccountNumber { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}
