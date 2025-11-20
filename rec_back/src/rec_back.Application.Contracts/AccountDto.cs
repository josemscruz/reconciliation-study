using System;

namespace Reconciliation;

public class AccountDto
{
    public Guid? Id { get; set; }
    public string AccountName { get; set; } = string.Empty;
    public string AccountNumber { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}