---
layout: post
title: How to send text, JSON or files using HttpClient.PostAsync()
date: 2014-10-23 00:00:00
tags: [MSDN, Windows 10, UWP, Windows 8.1, Windows Phone 8.1, Windows Runtime, WinRT, Windows Store Apps, Windows.Web.Http]
---

This is a common question in StackOverflow and MSDN forums. So, let’s take a look at our three main options.

## HttpStringContent

Send a string:

    // E.g. a JSON string.
    HttpStringContent stringContent = new HttpStringContent(
        "{ \"firstName\": \"John\" }",
        UnicodeEncoding.Utf8,
        "application/json");

    HttpClient client = new HttpClient();
    HttpResponseMessage response = await client.PostAsync(
        uri,
        stringContent);

This sends a POST request like this:

    POST / HTTP/1.1
    Accept-Encoding: gzip, deflate
    Content-Length: 23
    Content-Type: application/json; charset=UTF-8
    Host: kiewic.com
    Connection: Keep-Alive
    Cache-Control: no-cache

    { "firstName": "John" }

See here for examples of [how to serialize or parse JSON content](https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh770289.aspx).

## HttpFormUrlEncodedContent

Send a list of key-value pairs, better known as **x-www-form-urlencoded**:

    Dictionary<string, string> pairs = new Dictionary<string,string>();
    pairs.Add("Name", "Bob");
    pairs.Add("Age", "18");
    pairs.Add("Gender", "Male");
    HttpFormUrlEncodedContent formContent =
        new HttpFormUrlEncodedContent(pairs);
     
    HttpClient client = new HttpClient();
    HttpResponseMessage response = await client.PostAsync(uri, formContent);

This sends a POST request like this:

    POST / HTTP/1.1
    Accept-Encoding: gzip, deflate
    Content-Length: 27
    Content-Type: application/x-www-form-urlencoded
    Host: kiewic.com
    Connection: Keep-Alive
    Cache-Control: no-cache

    Name=Bob&Age=18&Gender=Male

This is equivalent to submit the following HTML form from a web browser:

    <form action="http://kiewic.com" method="post">
        <input name="Name" type="text" value="Bob" />
        <input name="Age" type="text" value="18" />
        <input name="Gender" type="text" value="Male" />
        <input type="submit" />
    </form>

These values can be easily accessed from PHP using the [$_POST][php_post] array. Or from ASP.NET using [Request.Form][aspnet_form] property.

## HttpMultipartFormDataContent

Send files, or text and files mixed, better known as **multipart/form-data**.

First, create a sample file:

    IStorageFolder folder = ApplicationData.Current.LocalFolder;
    IStorageFile file = await folder.CreateFileAsync(
        "foo.txt",
        CreationCollisionOption.ReplaceExisting);
    await FileIO.WriteTextAsync(
        file,
        "The quick brown fox jumps ...");

Then, send a request like this:

    IInputStream inputStream = await file.OpenAsync(FileAccessMode.Read);
    HttpMultipartFormDataContent multipartContent =
        new HttpMultipartFormDataContent();
    multipartContent.Add(
        new HttpStreamContent(inputStream),
        "myFile",
        file.Name);
    multipartContent.Add(
        new HttpStringContent("Hello World"),
        "myText");
     
    HttpClient client = new HttpClient();
    HttpResponseMessage response = await client.PostAsync(
        uri,
        multipartContent);

The raw POST request looks like this:

    POST / HTTP/1.1
    Accept-Encoding: gzip, deflate
    Content-Length: 371
    Content-Type: multipart/form-data; boundary=c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b
    Host: kiewic.com
    Connection: Keep-Alive
    Cache-Control: no-cache

    --c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b
    Content-Disposition: form-data; name="myFile"; filename="foo.txt"; filename*=UTF-8''foo.txt

    The quick brown fox jumps ...
    --c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b
    Content-Length: 11
    Content-Type: text/plain; charset=UTF-8
    Content-Disposition: form-data; name="myText"

    Hello World
    --c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b--

These values can be accessed from PHP using the [$_FILES][php_files] array. Or from ASP.NET using the [Request.Files][apsnet_files] property.

Notice that HttpClient encodes attachment file names using [RFC 2047][rfc_2047] to support file names with non-ASCII characters.


[php_post]: http://php.net/manual/en/reserved.variables.post.php 
[php_files]: http://php.net/manual/en/reserved.variables.files.php
[aspnet_form]: http://msdn.microsoft.com/query/dev12.query?appId=Dev12IDEF1&l=EN-US&k=k(System.Web.HttpRequestBase.Form)%3bk(TargetFrameworkMoniker-.NETFramework%2cVersion%3dv4.5)%3bk(DevLang-csharp)&rd=true
[aspnet_files]: http://msdn.microsoft.com/query/dev12.query?appId=Dev12IDEF1&l=EN-US&k=k(System.Web.HttpRequestBase.Files);k(TargetFrameworkMoniker-.NETFramework,Version%3Dv4.5);k(DevLang-csharp)&rd=true
[rfc_2047]: http://tools.ietf.org/html/rfc2047

