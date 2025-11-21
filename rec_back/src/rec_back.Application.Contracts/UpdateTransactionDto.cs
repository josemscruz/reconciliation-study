using System;

namespace Reconciliation;

public class UpdateTransactionDto
{
    public Guid? AccountId { get; set; }
    public decimal? Amount { get; set; }
    public DateTime? TransactionDate { get; set; }
}