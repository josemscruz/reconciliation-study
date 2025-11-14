namespace recback;

public static class recbackDbProperties
{
    public static string DbTablePrefix { get; set; } = "recback";

    public static string? DbSchema { get; set; } = null;

    public const string ConnectionStringName = "recback";
}
