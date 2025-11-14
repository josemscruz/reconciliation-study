using System;
using Volo.Abp.Domain.Entities;

namespace Reconciliation;

public class Account : BasicAggregateRoot<Guid>
{
    public string AccountName { get; set; } = string.Empty;
    public string AccountNumber { get; set; } = string.Empty;

}
