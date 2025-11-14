using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using rec_back.Data;
using Volo.Abp.DependencyInjection;

namespace rec_back.EntityFrameworkCore;

public class EntityFrameworkCorerec_backDbSchemaMigrator
    : Irec_backDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCorerec_backDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the rec_backDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<rec_backDbContext>()
            .Database
            .MigrateAsync();
    }
}
