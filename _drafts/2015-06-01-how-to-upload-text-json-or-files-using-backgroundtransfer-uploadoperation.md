---
layout: post
title: How to upload text, JSON or files using BackgroundTransfer.UploadOperation
date: 2015-06-01
tags: [MSDN, Windows 10, UWP, Windows 8.1, Windows Phone 8.1, Windows Runtime, WinRT, Windows Store Apps, Windows.Networking.BackgroundTransfer]
---

This is a common question in StackOverflow and MSDN forums. So, let's take a look at our three main options.

Plain Text, JSON string, etc.
-----------------------------

**Windows.Networking.BackgroundTransfer** is designed to execute large uploads or downloads in the background. For quick GET or POST requests, stick with **Windows.Web.Http**.

First you need to persist the string in a file.

    string content = "{ \"firstName\": \"John\" }"; // whatever is your text
    
    StorageFile file = await ApplicationData.Current.LocalFolder.CreateFileAsync(
        "stringFile.txt", CreationCollisionOption.GenerateUniqueName);
    
    await FileIO.WriteTextAsync(file, content, UnicodeEncoding.Utf8);

See here for examples of [how to serialize or parse JSON content][msdn_json].

Then, to upload the file do:

    Uri uri = new Uri("http://localhost");

    BackgroundUploader uploader = new BackgroundUploader();
    uploader.SetRequestHeader("Content-Type", "application/json; charset=utf-8");

    UploadOperation upload = uploader.CreateUpload(uri, file);
    Task<UploadOperation> startTask = upload.StartAsync().AsTask();

    Task ignore = startTask.ContinueWith((task) =>
        {
            // TODO: check task.Status
        });

The raw HTTP request with Fiddler or Network Monitor looks something like this:

    POST / HTTP/1.1
    Accept: */*
    UA-CPU: AMD64
    Accept-Encoding: gzip, deflate
    User-Agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; LCJB; rv:11.0) like Gecko
    Host: localhost
    Content-Length: 23
    Connection: Keep-Alive
    Cache-Control: no-cache

    { "firstName": "John" }


*TODO: how to handle in ASP.NET and PHP and Node.js*

Single File
-----------

XXXX



Multiple Files
--------------







[msdn_json]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh770289.aspx
[php_post]: http://php.net/manual/en/reserved.variables.post.php
[php_files]: http://php.net/manual/en/reserved.variables.files.php
[php_file_get_contents]: https://php.net/manual/en/function.file-get-contents.php
[aspnet_form]: https://msdn.microsoft.com/en-us/library/system.web.httprequestbase.form(v=vs.110).aspx
[aspnet_files]: https://msdn.microsoft.com/en-us/library/system.web.httprequestbase.files(v=vs.110).aspx
[aspnet_inputstream]: https://msdn.microsoft.com/en-us/library/system.web.httprequestbase.inputstream(v=vs.110).aspx
[rfc_2047]: http://tools.ietf.org/html/rfc2047

