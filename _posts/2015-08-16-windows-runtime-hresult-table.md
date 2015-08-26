---
layout: post
title: Windows Runtime HRESULT Table
date: 2015-08-16 00:00:00.000000000 -08:00
tags: [WinRT, Windows Runtime, Windows Store Apps, UWP, Windows, MSDN]
---




### 0x80070002 (ERROR_FILE_NOT_FOUND)

`Windows::Web::Http::HttpClient::GetAsync`

HttpCacheReadBehavior::OnlyFromCache was used and file is not in the cache. 





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

`HttpClient::SendRequestAsync` completion

No network access available and an IP address given as URI. 



### 0x80072F73 (ERROR_HTTP_PUSH_STATUS_CODE_NOT_SUPPORTED)

`Windows::Web::Http::HttpClient`






### 0x80072F74 (ERROR_HTTP_PUSH_RETRY_NOT_SUPPORTED)

`Windows::Web::Http::HttpClient`

Control Channel Trigger with client certificate not supported. 




### 0x80072F75 (ERROR_HTTP_PUSH_ENABLE_FAILED)






### 0x80072EFF (WININET_E_CONNECTION_RESET)

`IInputStream::ReadAsync` completion

The network adapter is disconnected.

 


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

Server aborts connection during SSL negotation.





### 0x80072740 (WSAEADDRINUSE)

`Windows::Networking::Sockets::StreamSocket::ConnectAsync` and `Windows::Networking::Sockets::DatagramSocket::BindAsync`

Only one usage of each socket address (protocol/network address/port) is normally permitted. (Exception from HRESULT: 0x80072740)

Another socket is bound to the same port.

 


### 0x8007271D (WSAEACCES)

`Windows::Networking::Sockets::StreamSocket::ConnectAsync` and `Windows::Networking::Sockets::DatagramSocket::BindAsync`

Another socket is bound to the same port.





### 0x8000000E (E_ILLEGAL_METHOD_CALL)

`Windows::Networking::BackgroundTransfer::BackgroundTransferGroup`

50 BackgroundTransferGroup entries limit reached.



### 0x80070565 (ERROR_TOO_MANY_SECRETS)

`Windows::Networking::BackgroundTransfer`

The maximum number of secrets that may be stored in a single system has been exceeded.

[StackOverflow](http://stackoverflow.com/questions/27178552/passwordcredential-backgroundtransfer)



[msdn_json]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh770289.aspx

