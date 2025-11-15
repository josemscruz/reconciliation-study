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

### 4. Seed Data (WIP)

I will eventually create the proper seeding process using dbmigrator, but for now, if you want some sample data to put in the database, you can use the following sql:

```
INSERT INTO "Accounts" ("Id", "AccountName", "AccountNumber", "Description")
VALUES
('11111111-aaaa-bbbb-cccc-222222222222', 'Neteller', '91011121', 'Neteller account'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Skrill', '12345678', 'Skrill Account');

INSERT INTO "Transactions" ("Id", "AccountId", "Amount", "TransactionDate")
VALUES
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', 100.00, '2025-01-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', -45.25, '2025-02-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', 250.00, '2025-03-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', -75.00, '2025-04-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', 320.00, '2025-05-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', -20.50, '2025-06-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', 90.00,  '2025-07-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', -15.00, '2025-08-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', 480.00, '2025-09-15 10:30:00'),
(gen_random_uuid(), '11111111-aaaa-bbbb-cccc-222222222222', -60.75, '2025-10-15 10:30:00'),
(gen_random_uuid(), 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 100.50, '2025-11-15 10:30:00'),
(gen_random_uuid(), 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', -50.25, '2025-12-16 14:20:00'),
(gen_random_uuid(), 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 200.00, '2025-05-17 09:15:00'),
(gen_random_uuid(), 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', -75.80, '2025-06-18 16:45:00'),
(gen_random_uuid(), 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 300.00, '2025-07-19 11:00:00');
```

### 6. Run the Application

Navigate back to rec_back.HttpApi.Host:

```bash
cd ../rec_back.HttpApi.Host
dotnet run
```

The application will be available at `http://localhost:44317`.
