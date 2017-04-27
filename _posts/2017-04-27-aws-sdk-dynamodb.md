---
layout: post
title: How to insert or delete items from a DynamoDB table using Node.js
date: 2017-04-08 00:00:00.000000000 -07:00
tags: [AWS, AWS SDK, DynamoDB]
category: aws
---

First, create a DynamoDB table at [https://us-west-2.console.aws.amazon.com/dynamodb](https://us-west-2.console.aws.amazon.com/dynamodb) . Put attention in the region where you create your database, it is in the URL. In this example, the region is *us-west-2*.

Then, create a IAM user at [https://console.aws.amazon.com/iam/home](https://console.aws.amazon.com/iam/home) . For simplicity, select *AmazonDynamoDBFullAccess*, although later you may want to restrict the permissions of the user. Once the user is created, take note of the *Access key ID* and the *Secret access key*.

Then, open a terminal/console, and install the AWS Javascript SDK:

````bash
npm install aws-sdk --save
````

Then, copy and paste the following snippet into a Javascript file and execute. Don't forget to replace the region, the access key ID adn the access key ID.

<script src="https://gist.github.com/kiewic/b175e6a926d3ddd7277463980e8bd3b2.js"></script>

Happy coding!