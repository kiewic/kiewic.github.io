---
layout: post
title: Accessing the Entity Framework Database Using the Command Prompt
date: 2015-12-15 00:00:00.000000000 -08:00
tags: [ASP.NET, Entity Framework, LocalDB]
---

Access a default databse created by Entity Framework.

## Find the Connection String

In you ASP.NET WebApi controller, write:

    ApplicationDbContext db = new ApplicationDbContext();
    System.Diagnostics.Debug.WriteLine(db.Database.Connection.ConnectionString);

Example of default Entity Framework connection string in the Output window:

    Data Source=(localdb)\mssqllocaldb;AttachDbFilename=|DataDirectory|SchoolContext.mdf;Initial Catalog=SchoolContext;Integrated Security=True;MultipleActiveResultSets=True

## Find Your LocalDB Information

Open a Command Prompt for VS2015 and type:

    SqlLocalDB.exe info

Output:

    MSSQLLocalDB

Print all the information of MSSQLLocalDB:

    SqlLocalDB.exe info "MSSQLLocalDB"

Output:

    Name:               mssqllocaldb
    Version:            12.0.2000.8
    Shared name:
    Owner:              MyPc\bob
    Auto-create:        Yes
    State:              Running
    Last start time:    12/15/2015 9:41:45 PM
    Instance pipe name: np:\\.\pipe\LOCALDB#A0F2C8F3\tsql\query

## Explore Your LocalDB

Add SQLCMD.exe to the command line path:

    set path=%path%;c:\Program Files\Microsoft SQL Server\110\Tools\Binn\

Then connect to the database:

    sqlcmd -S np:\\.\pipe\LOCALDB#A0F2C8F3\tsql\query

Display all databases:

    SELECT name,dbid FROM master.dbo.sysdatabases;
    GO

Output:

    name          dbid
    ------------- ----
    master        1
    tempdb        2
    model         3
    msdb          4
    SchoolContext 5
    
    (5 rows affected)

Select a database:

    USE SchoolContext;
    GO

Output:

    Changed database context to 'SchoolContext'.

Display all the tables:

    SELECT * FROM information_schema.tables;
    GO

Output:

    TABLE_CATALOG  TABLE_SCHEMA TABLE_NAME          TABLE_TYPE
    -------------- ------------ ------------------- ----------
    SchoolContext  dbo          Ingredient          BASE TABLE
    SchoolContext  dbo          Recipe              BASE TABLE
    SchoolContext  dbo          RecipeIngredient    BASE TABLE
    SchoolContext  dbo          __MigrationHistory  BASE TABLE

    (4 rows affected)




