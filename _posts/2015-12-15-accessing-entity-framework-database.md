---
layout: post
title: Accessing the Entity Framework Database Using the Command Prompt
date: 2015-12-15 00:00:00.000000000 -08:00
tags: [ASP.NET, Entity Framework, LocalDB]
category: .net
icon: database.svg
---

Access a default database created by Entity Framework.

## Find the Connection String

In you ASP.NET WebApi controller, write:


{% highlight csharp %}
ApplicationDbContext db = new ApplicationDbContext();
System.Diagnostics.Debug.WriteLine(db.Database.Connection.ConnectionString);
{% endhighlight %}


Example of default Entity Framework connection string in the Output window:


{% highlight plaintext %}
Data Source=(localdb)\mssqllocaldb;AttachDbFilename=|DataDirectory|SchoolContext.mdf;Initial Catalog=SchoolContext;Integrated Security=True;MultipleActiveResultSets=True
{% endhighlight %}

## Find Your LocalDB Information

Open a Command Prompt for VS2015 and type:


{% highlight shell %}
SqlLocalDB.exe info
{% endhighlight %}


Output:


{% highlight plaintext %}
MSSQLLocalDB
{% endhighlight %}


Print all the information of MSSQLLocalDB:


{% highlight shell %}
SqlLocalDB.exe info "MSSQLLocalDB"
{% endhighlight %}

Output:


{% highlight plaintext %}
Name:               mssqllocaldb
Version:            12.0.2000.8
Shared name:
Owner:              MyPc\bob
Auto-create:        Yes
State:              Running
Last start time:    12/15/2015 9:41:45 PM
Instance pipe name: np:\\.\pipe\LOCALDB#A0F2C8F3\tsql\query
{% endhighlight %}


## Explore Your LocalDB

Add SQLCMD.exe to the command line path:


{% highlight shell %}
set path=%path%;c:\Program Files\Microsoft SQL Server\110\Tools\Binn\
{% endhighlight %}


Then connect to the database:


{% highlight shell %}
sqlcmd -S np:\\.\pipe\LOCALDB#A0F2C8F3\tsql\query
{% endhighlight %}


Display all databases:


{% highlight sql %}
SELECT name,dbid FROM master.dbo.sysdatabases;
GO
{% endhighlight %}

Output:


{% highlight plaintext %}
name          dbid
------------- ----
master        1
tempdb        2
model         3
msdb          4
SchoolContext 5

(5 rows affected)
{% endhighlight %}


Select a database:


{% highlight sql %}
USE SchoolContext;
GO
{% endhighlight %}


Output:


{% highlight plaintext %}
Changed database context to 'SchoolContext'.
{% endhighlight %}

Display all the tables:


{% highlight sql %}
SELECT * FROM information_schema.tables;
GO
{% endhighlight %}


Output:


{% highlight plaintext %}
TABLE_CATALOG  TABLE_SCHEMA TABLE_NAME          TABLE_TYPE

-------------- ------------ ------------------- ----------
SchoolContext  dbo          Ingredient          BASE TABLE
SchoolContext  dbo          Recipe              BASE TABLE
SchoolContext  dbo          RecipeIngredient    BASE TABLE
SchoolContext  dbo          __MigrationHistory  BASE TABLE

(4 rows affected)
{% endhighlight %}


