---
layout: post
title: How to insert or delete items from a DynamoDB table using Node.js
date: 2017-04-08 00:00:00.000000000 -07:00
tags: [AWS, AWS SDK, DynamoDB, JavaScript]
category: aws
icon: delete
---

To get started with DynamoDb, follow these steps:

* TOC
{:toc}

## Introduction
{:.no_toc}

If you are here, you probably have little experience working with **DynamoDB**. Be aware that DynamoDB is designed for highly scalable storage requirements, and not for traditional SQL queries or tables with low volume of data.

Maybe this is obvious for you, but here is an example of an issue I faced when I started designing application with DynamoDB:

> Every column you use in a query must be a partition key or an index. Indexes require additional *read capacity units* and *write capacity units*. For example, adding a small index with 5 read capacity units and 5 write capacity units is estimated to cost you USD$2.91 a month.
>
> If you want to write a query equivalent to `SELECT * FROM MyTable WHERE Tag = 'Foo' AND Month = 1 AND User = 'Bill'` using DynamoDB, where `Tag`, `Month` and `User` are not the primary key, then you will need to set three additional indexes.

You get the idea. If you have not changed you mind, continue reading to get started.

## Create a DynamoDB table

First, create a DynamoDB table at [https://us-west-2.console.aws.amazon.com/dynamodb](https://us-west-2.console.aws.amazon.com/dynamodb) . Put attention in the region where you create your database, it is in the URL. In this example, the region is *us-west-2*.

## Create an IAM user

Then, create an IAM user at [https://console.aws.amazon.com/iam/home](https://console.aws.amazon.com/iam/home) . For simplicity, select the *AmazonDynamoDBFullAccess* policy. Later you can restrict the permissions of the user. Once the user is created, take note of the *Access key ID* and the *Secret access key*.

## Install NPM aws-sdk package

Open a terminal/console, and install the AWS Javascript SDK:

````bash
npm install aws-sdk --save
````

## Copy-paste Node.js examples

There are two options for Javascript developers: [DynamoDB][SdkDynamoDB] and [DocumentClient][DocumentClient]. The first option has more advance features, but the second one is easier to use because it automatically does some work for you.

### Using DynamoDB API

Here is an example using AWS.DynamoDB. Notice how you have to add extra information about data types, and convert all the properties into string values.

Don't forget to replace the region, the access key ID and the access key ID when copy-pasting the example into a Javascript file.

<script src="https://gist.github.com/kiewic/b175e6a926d3ddd7277463980e8bd3b2.js"></script>

### Using DocumentClient API

Here is an example using AWS.DynamoDB.DocumentClient. Notice there is no need to marshal the primary key or properties:

<script src="https://gist.github.com/kiewic/97c49d7cc74504323faf0123022b15df.js"></script>

[SdkDynamoDB]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
[DocumentClient]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
