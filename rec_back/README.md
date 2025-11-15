# Reconciliation App

A reconciliation application built with ABP Framework for managing accounts and transactions.

## Prerequisites

-   [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
-   [PostgreSQL](https://www.postgresql.org/download/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <https://github.com/josemscruz/reconciliation-study>
```

### 2. Configure Database Connection

Open `appsettings.json` in rec_back.HttpApi.Host and update the connection string:

```json
"ConnectionStrings": {
  "Default": "Host=localhost;Database=ReconciliationDb;Username=postgres;Password=yourpassword"
}
```

### 3. Install EF Core Tools (if not already installed)

```bash
dotnet tool install --global dotnet-ef
```

### 4. Apply Database Migrations

Navigate to rec_back.EntityFrameworkCore project directory:

```bash
cd src/rec_back.EntityFrameworkCore
dotnet ef database update
```

### 5. Run the Application

Navigate back to rec_back.HttpApi.Host:

```bash
cd ../rec_back.HttpApi.Host
dotnet run
```

The application will be available at `http://localhost:44317`.
