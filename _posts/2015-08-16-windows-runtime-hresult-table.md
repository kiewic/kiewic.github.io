---
layout: post
title: Windows Runtime HRESULT Table
date: 2015-08-16 00:00:00.000000000 -08:00
tags: [WinRT, Windows Runtime, Windows Store Apps, UWP, Windows, MSDN]
---

## Contents
{:.no_toc}

* Table of Contents Placeholder
{:toc}

## Windows.Web.Http.HttpClient.GetAsync()

Also applies to `HttpClient.SendRequestAsync()`, `HttpClient.PostAsync()`, `HttpClient.PutAsync()`, etc.

* 0x80070002
    * ERROR_FILE_NOT_FOUND
    * `HttpCacheReadBehavior.OnlyFromCache` was used and requested resource is not in the cache.
* 0x80070490
    * ERROR_NOT_FOUND
    * Element not found.
    * The request was started in a process or thread that does not have a window. Start the request from a UI thread or disable UI features using `HttpBaseProtocolFilter::AllowUI = false`
    * Read more on [stackoverflow.com](http://stackoverflow.com/questions/24361588/windows-web-http-httpclientgetasync-throws-an-incomplete-exception-when-invalid)
* 0X8007007B
    * ERROR_INVALID_NAME
    * The URI does not have a host name, e.g.: `http:///`
* 0X8000000E
    * E_ILLEGAL_METHOD_CALL
    * The URI has an schema different of `http://` or `https://`
* 0x80000013
    * RO_E_CLOSED
    * `HttpClient` or `IHttpFilter` was previously disposed.
* 0x80072EFF
    * ERROR_INTERNET_CONNECTION_RESET
    * The connection with the server was reset.
    * Server aborts connection during SSL negotiation.
* 0x80072F0D
    * ERROR_INTERNET_INVALID_CA
    * The certificate authority is invalid or incorrect.
    * User clicks Cancel instead of selecting a client certificate on select certificate UI.
* 0x8000000E
    * E_ILLEGAL_METHOD_CALL
    * A `HttpRequestMessage` object was already sent.
* 0x8000000E
    * E_ILLEGAL_METHOD_CALL
    * `HttpRequestMessage.RequestUri` is null.
* 0x80072EE7
    * WININET_E_NAME_NOT_RESOLVED
    * The server name or address could not be resolved
    * Cannot contact DNS server or there are no DNS records for the host name.
* 0x80072EFD
    * WININET_E_CANNOT_CONNECT
    * No network access available and the URI host name is an IP address.
* 0x80072F0D
    * WININET_E_INVALID_CA
    * The certificate authority is invalid or incorrect.
    * The Issuer is not in the Trusted Root Certification Authorities store.
    * If using a self-signed server certificate, add the certificate to the Package Trusted Root Certification Authorities store. See example on [stackoverflow.com](http://stackoverflow.com/questions/29395219/dont-know-how-to-add-ssl-certificate-on-windows-phone-8-1-portable-class-librar/29419301#29419301)
    * Not recommended: ignore the error by adding `ChainValidationResult.Untrusted` to `HttpBaseProtocolFilter.IgnorableServerCertificateErrors`. See example on [stackoverflow.com][ignore_cert_errors]
* 0x80072F06
    * WININET_E_SEC_CERT_CN_INVALID
    * The host name in the certificate is invalid or does not match.
    * Certificate was issued to a different domain name. E.g.: certificate was issued to *www.example.com* and you are accessing *foo.example.com*
    * Not recommended: ignore the error by adding `ChainValidationResult.InvalidName` to `HttpBaseProtocolFilter.IgnorableServerCertificateErrors`. See example on [stackoverflow.com][ignore_cert_errors]
* 0x80072F05
    * WININET_E_SEC_CERT_DATE_INVALID
    * The date in the certificate is invalid or has expired
    * Not recommended: ignore the error by adding `ChainValidationResult.Expired` to `HttpBaseProtocolFilter.IgnorableServerCertificateErrors`. See example on [stackoverflow.com][ignore_cert_errors]



## Windows.Web.Http and ControlChannelTrigger

* 0x8000000E
    * `Windows::Networking::Sockets::ControlChannelTrigger::WaitForPushEnabled()`
    * E_ILLEGAL_METHOD_CALL
    * The server cannot be running locally, it must be running in a remote machine.
* 0x80072F73
    * ERROR_HTTP_PUSH_STATUS_CODE_NOT_SUPPORTED
* 0x80072F74
    * ERROR_HTTP_PUSH_RETRY_NOT_SUPPORTED
    * Client certificate is not supported with Control Channel Trigger.
* 0x80072F75
    * ERROR_HTTP_PUSH_ENABLE_FAILED


## System.Net.HttpClient

* 0x80072f08
    * ERROR_INTERNET_HTTPS_TO_HTTP_ON_REDIR
    * The application is moving from an SSL to an non-SSL connection because of a redirect.
    * Disable auto-redirect and handle redirection manually. See example on [stackoverflow.com](http://stackoverflow.com/questions/32992164/getting-exception-in-system-net-httpclient-a-redirect-request-will-change-a-se/32998982#32998982)


## Windows.Networking.Sockets and IInputStream.ReadAsync()

* 0x80072EFF
    * WININET_E_CONNECTION_RESET
    * The connection with the server was reset. The network adapter was disconnected.
* 0x800703E3
    * ERROR_OPERATION_ABORTED
    * The I/O operation has been aborted because of either a thread exit or an application request. (Exception from HRESULT: 0x800703E3)
    * The local socket was closed.


## Windows.Networking.Sockets.StreamSocket.ConnectAsync()

Also applies to `Windows.Networking.Sockets.DatagramSocket.BindAsync()`

* 0x80072740
    * WSAEADDRINUSE
    * Only one usage of each socket address (protocol/network address/port) is normally permitted. (Exception from HRESULT: 0x80072740)
    * Another socket in the local system is bound to the same port number.
* 0x8007271D
    * WSAEACCES
    * Another socket is bound to the same port.
* 0x80072746
    * WSAECONNRESET
    * `Windows::Networking::Sockets::DatagramSocket::MessageReceived`
    * An existing connection was forcibly closed by the remote host. (Exception from HRESULT: 0x80072746)
    * Remote peer did not receive a UDP message.


## Windows.Networking.Sockets.DatagramSocket.GetOutputStreamAsync()

* 0x80072AF9
    * WSAHOST_NOT_FOUND
    * No such host is known. (Exception from HRESULT: 0x80072AF9)
    * Use `DatagramSocket::GetOutputStreamAsync()` if socket sends every message to different destination. `GetOutputStreamAsync()` does DNS resolution first. If DNS resolution fails, you get this error.


## Windows.Networking.Sockets.StreamSocketListener.BindServiceNameAsync()

* 0x8000000E
    * E_ILLEGAL_METHOD_CALL
    * A method was called at an unexpected time. (Exception from HRESULT: 0x8000000E)
    * Set a `StreamSocketListener::ConnectionReceived` handler before calling into `StreamSocketListener::BindServiceNameAsync`.


## Windows.ApplicationModel.Background.SocketActivityTrigger

* 0x8007273D
    * WSAEOPNOTSUPP
    * `Windows::Networking::Sockets::StreamSocket::EnableTransferOwnership`
    * The attempted operation is not supported for the type of object referenced.
    * Read more on [stackoverflow.com](http://stackoverflow.com/questions/32026579/universal-app-cannot-bind-streamsocketlistener-after-enabletransferownership)


## Windows.Networking.Sockets.StreamWebSocket.ConnectAsync()

* 0x800710DD
    * ERROR_INVALID_OPERATION
    * The operation identifier is not valid. (Exception from HRESULT: 0x800710DD)
    * Trying to connect to an HTTP server instead of a WebSocket server.
* 0x80072F78
    * ERROR_HTTP_INVALID_SERVER_RESPONSE
    * The server returned an invalid or unrecognised response.
    * Remote machine (server) aborts connection during SSL negotiation.


## Windows.Networking.Sockets.MessageWebSocket.ConnectAsync()

* 0x80072EFF
    * ERROR_INTERNET_CONNECTION_RESET
    * The connection with the server was reset.
    * Remote machine (server) aborts connection during SSL negotiation.




## Windows.Networking.BackgroundTransfer

* 0x8000000E
    * E_ILLEGAL_METHOD_CALL
    * `Windows::Networking::BackgroundTransfer::BackgroundTransferGroup`
    * 50 BackgroundTransferGroup entries limit reached.
* 0x8000000E
    * E_ILLEGAL_METHOD_CALL
    * `Windows::Networking::BackgroundTransfer::DownloadOperation::StartAsync` and `Windows::Networking::BackgroundTransfer::UploadOperation::StartAsync`
    * A method was called at an unexpected time. Quota for maximum number of concurrent operations exceeded. Wait for an operation to complete before starting new ones.
    * There is a limit of 500 concurrent downloads and uploads running or paused at a time. Cancel or complete some downloads and upload to make space for new downloads and uploads.
* 0x80070565
    * ERROR_TOO_MANY_SECRETS
    * `Windows::Networking::BackgroundTransfer`
    * The maximum number of secrets that may be stored in a single system has been exceeded. (Exception from HRESULT: 0x80070565)
    * Read more on [stackoverflow.com](http://stackoverflow.com/questions/27178552/passwordcredential-backgroundtransfer)
* 0X80072EEF
    * WININET_E_LOGIN_FAILURE
    * `Windows::Networking::BackgroundTransfer::DownloadOperation::StartAsync`
    * The FTP server did not accept the given user name and password. If no credentials were provided, the FTP server is not configured to allow anonymous connections.

<!--

How to find error constants?

    cd c:\Program Files (x86)\Windows Kits\8.1
    findstr /s /i /C:"0x8000000E" *.h
    
-->


[msdn_json]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh770289.aspx
[ignore_cert_errors]: http://stackoverflow.com/a/23875601/27211

