using System.Text.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors();

var jsonPath = Path.Combine(AppContext.BaseDirectory, "accounts.json");
var accounts = JsonSerializer.Deserialize<object>(
    File.ReadAllText(jsonPath),
    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
);

app.MapGet("/accounts", () => Results.Json(accounts));

app.Run();