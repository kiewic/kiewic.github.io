---
layout: post
title: Getting started with ASP.NET OData WebApi
date: 2016-04-11 00:00:00.000000000 -08:00
tags: [AspNet, OData]
---

Some notes just for future reference.

There are two packages for implementing OData services in ASP.NET:

* **Microsoft.AspNet.WebApi.OData** for OData v3
* **Microsoft.AspNet.OData** for OData v4

To implement an OData v4 service (a server), follow the steps at:

http://odata.github.io/WebApi/

To implement a C# client:

1. Create a new C# project, e.g., a C# console application.
2. In Visual Studio, go to *Extensions and Updates*, then select *Online*, search and install *OData v4 Client Code Generator*.
3. Add a new item of type *OData Client* file and set `MetadataDocumentUri` with your service $metadata URI, e.g., `http://localhost:17666/$metadata`
4. Save and when the *Security Warning* dialogue pops up, click *OK*.
5. Then, copy and paste the sample from http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/odata-v4/create-an-odata-v4-client-app 



