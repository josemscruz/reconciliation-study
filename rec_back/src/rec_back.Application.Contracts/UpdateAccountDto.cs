using System;

namespace Reconciliation;

public class UpdateAccountDto
{
    public string? AccountName { get; set; }
    public string? AccountNumber { get; set; }
    public string? Description { get; set; }
}