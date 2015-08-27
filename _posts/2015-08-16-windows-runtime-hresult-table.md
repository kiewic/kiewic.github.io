---
layout: post
title: Windows Runtime HRESULT Table
date: 2015-08-16 00:00:00.000000000 -08:00
tags: [WinRT, Windows Runtime, Windows Store Apps, UWP, Windows, MSDN]
---

## Windows.Web.Http

### 0x80070002 (ERROR_FILE_NOT_FOUND)

`Windows::Web::Http::HttpClient::GetAsync`

HttpCacheReadBehavior::OnlyFromCache was used and file is not in the cache. 



### 0x80070490 (ERROR_NOT_FOUND)

`Windows::Web::Http::HttpClient::GetAsync` completion

Element not found.

The request was started in a process or thread that does not have a window. Start the request from a UI thread or disable UI with `HttpBaseProtocolFilter::AllowUD = false`

[Go to stackoverflow.com](http://stackoverflow.com/questions/24361588/windows-web-http-httpclientgetasync-throws-an-incomplete-exception-when-invalid)



### 0X8007007B (ERROR_INVALID_NAME)

`Windows::Web::Http::HttpClient::GetAsync`

**http:///** used (notice there are three slashes). 



### 0X8000000E (E_ILLEGAL_METHOD_CALL)

`Windows::Web::Http::HttpClient::GetAsync`

An schema other than HTTP or HTTPS was used. 



### 0x80000013 (RO_E_CLOSED)

`Windows::Web::Http::HttpClient::GetAsync`

HttpClient or IHttpFilter was previously disposed. 



### 0x80072EFF (ERROR_INTERNET_CONNECTION_RESET)

`Windows::Web::Http::HttpClient::GetAsync`

The connection with the server was reset.

Server aborts connection during SSL negotiation. 



### 0x80072F0D (ERROR_INTERNET_INVALID_CA)


`Windows::Web::Http::HttpClient::GetAsync`

The certificate authority is invalid or incorrect

User clicks Cancel instead of selecting a certificate using the UI. 



### 0x8000000E (E_ILLEGAL_METHOD_CALL)

`Windows::Web::Http::HttpClient::SendRequestAsync`

HttpRequestMessage was previously sent. 



### 0x8000000E (E_ILLEGAL_METHOD_CALL)

`Windows::Web::Http::HttpClient::SendRequestAsync`

HttpRequestMessage.RequestUri is null. 



### 0x80072EE7 (WININET_E_NAME_NOT_RESOLVED)

`Windows::Web::Http::HttpClient::SendRequestAsync` completion

No network access available and a domain name given as URI. 



### 0x80072EFD (WININET_E_CANNOT_CONNECT)

`Windows::Web::Http::HttpClient::SendRequestAsync` completion

No network access available and an IP address given as URI. 



### 0x80072F73 (ERROR_HTTP_PUSH_STATUS_CODE_NOT_SUPPORTED)

`Windows::Web::Http::HttpClient`



### 0x80072F74 (ERROR_HTTP_PUSH_RETRY_NOT_SUPPORTED)

`Windows::Web::Http::HttpClient`

Control Channel Trigger with client certificate not supported. 



### 0x80072F75 (ERROR_HTTP_PUSH_ENABLE_FAILED)

`Windows::Web::Http::HttpClient`



## Windows.Networking.Sockets



### 0x80072EFF (WININET_E_CONNECTION_RESET)

`Windows::Networking::Sockets::StreamSocket::InputStream::ReadAsync` completion

The connection with the server was reset.

The network adapter is disconnected.



### 0x800703E3 (ERROR_OPERATION_ABORTED)

`Windows::Networking::Sockets::StreamSocket::InputStream`

The I/O operation has been aborted because of either a thread exit or an application request.  (Exception from HRESULT: 0x800703E3)

The local socket was closed.



### 0x800710DD (ERROR_INVALID_OPERATION)

`Windows::Networking::Sockets::StreamWebSocket::ConnectAsync`

The operation identifier is not valid. (Exception from HRESULT: 0x800710DD)

Trying to connect to an HTTP server instead of a WebSocket server.



### 0x80072F78 (ERROR_HTTP_INVALID_SERVER_RESPONSE)

`Windows::Networking::Sockets::StreamWebSocket::ConnectAsync`

The server returned an invalid or unrecognised response.

Server aborts connection during SSL negotiation.



### 0x80072EFF (ERROR_INTERNET_CONNECTION_RESET)

`Windows::Networking::Sockets::MessageWebSocket::ConnectAsync`

The connection with the server was reset.

Server aborted the connection during SSL negotiation.



### 0x80072740 (WSAEADDRINUSE)

`Windows::Networking::Sockets::StreamSocket::ConnectAsync` and `Windows::Networking::Sockets::DatagramSocket::BindAsync`

Only one usage of each socket address (protocol/network address/port) is normally permitted. (Exception from HRESULT: 0x80072740)

Another socket is bound to the same port.



### 0x8007271D (WSAEACCES)

`Windows::Networking::Sockets::StreamSocket::ConnectAsync` and `Windows::Networking::Sockets::DatagramSocket::BindAsync`

Another socket is bound to the same port.


### 0x80072746 (WSAECONNRESET)

`Windows::Networking::Sockets::DatagramSocket::MessageReceived`

An existing connection was forcibly closed by the remote host. (Exception from HRESULT: 0x80072746)

Remote peer did not receive a UDP message.


### 0x80072AF9 (WSAHOST_NOT_FOUND)

`Windows::Networking::Sockets::DatagramSocket::GetOutputStreamAsync`

No such host is known. (Exception from HRESULT: 0x80072AF9)

Use `DatagramSocket::GetOutputStreamAsync()` if socket sends every message to different destination. `GetOutputStreamAsync()` does DNS resolution first. If DNS resolution fails, you get this error.



### 0x8007273D (WSAEOPNOTSUPP) <sup>ref needed</sup>

`Windows::Networking::Sockets::StreamSocket::EnableTransferOwnership`

The attempted operation is not supported for the type of object referenced.

[Go to stackoverflow.com](http://stackoverflow.com/questions/32026579/universal-app-cannot-bind-streamsocketlistener-after-enabletransferownership)



### 0x8000000E (E_ILLEGAL_METHOD_CALL)

`Windows::Networking::Sockets::StreamSocketListener::BindServiceNameAsync`

A method was called at an unexpected time. (Exception from HRESULT: 0x8000000E)

Set a `StreamSocketListener::ConnectionReceived` handler before calling into `StreamSocketListener::BindServiceNameAsync`.



## Windows.Networking.BackgroundTransfer



### 0x8000000E (E_ILLEGAL_METHOD_CALL)

`Windows::Networking::BackgroundTransfer::BackgroundTransferGroup`

50 BackgroundTransferGroup entries limit reached.



### 0x80070565 (ERROR_TOO_MANY_SECRETS)

`Windows::Networking::BackgroundTransfer`

The maximum number of secrets that may be stored in a single system has been exceeded.

[Go to stackoverflow.com](http://stackoverflow.com/questions/27178552/passwordcredential-backgroundtransfer)


<!--

How to find error constants?

    cd c:\Program Files (x86)\Windows Kits\8.1
    findstr /s /i /C:"0x8000000E" *.h
    
-->


[msdn_json]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh770289.aspx

