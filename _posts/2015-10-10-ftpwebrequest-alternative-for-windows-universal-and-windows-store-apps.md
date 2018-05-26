---
layout: post
title: FtpWebRequest Alternative for Windows Universal and Windows Store Apps
tags: [MSDN, Windows 8.1, Windows Phone 8.1, Windows 10, Windows Runtime, WinRT, Windows Store Apps, Windows Universal Apps, Windows.Networking.BackgroundTransfer, System.Net.FtpWebRequest, C#]
category: winrt
permalink: /2015-10-10/ftpwebrequest-alternative-for-windows-universal-and-windows-store-apps
icon: file-system.svg
---

If you are here because:

* `System.Net.FtpWebRequest` is not available in Windows Store and Windows Universal apps.
* `Windows.Networking.BackgroundTransfer.BackgroundUploader` does not support FTP uploads.

Take a look at the [FtpClient GitHub][FtpClient] project, a FTP uploader made with sockets.

To do a FTP upload, use the following C# snippet:

{% highlight csharp %}
FtpClient client = new FtpClient();
await client.ConnectAsync(
    new HostName("example.com"),
    "21",
    "anonymous",
    "anonymous");

byte[] data = Encoding.UTF8.GetBytes("Hello world!");
await client.UploadAsync("/foo/bar.txt", data);
{% endhighlight %}

Read more [here][README].

[FtpClient]:https://github.com/kiewic/FtpClient
[README]:https://github.com/kiewic/FtpClient/blob/master/README.md
