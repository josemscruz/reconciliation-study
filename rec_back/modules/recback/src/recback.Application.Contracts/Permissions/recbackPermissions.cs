using Volo.Abp.Reflection;

namespace recback.Permissions;

public class recbackPermissions
{
    public const string GroupName = "recback";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(recbackPermissions));
    }
}
