---
layout: post
title: Windows Runtime HRESULT Table
date: 2015-08-16 00:00:00.000000000 -08:00
tags: [WinRT, Windows Runtime, Windows Store Apps, UWP, Windows, MSDN]
---


Break on *process creation* and *process exit*
----------------------------------------------

| StreamWebSocket::ConnectAsync | 0X800710DD |  | The operation identifier is not valid. (Exception from HRESULT: 0x800710DD) | Trying to connect to an HTTP server instead of a WebSocket server. |
| StreamWebSocket::ConnectAsync | 0x80072F78 |  | The server returned an invalid or unrecognized response | Server aborts connection during SSL negotation. |
| MessageWebSocket::ConnectAsync | 0x80072EFF | ERROR_INTERNET_CONNECTION_RESET | The connection with the server was reset | Server aborts connection during SSL negotation. |
| StreamSocket::ConnectAsync and DatagramSocket::BindAsync |  | WSAEADDRINUSE | Another socket is bound to the same port. |  |
| StreamSocket::ConnectAsync and DatagramSocket::BindAsync |  | WSAEACCES | Another socket is bound to the same port. |  |
| HttpClient::GetAsync | 0x80070002 | ERROR_FILE_NOT_FOUND |  | HttpCacheReadBehavior::OnlyFromCache was used and file is not in the cache. |
| HttpClient::GetAsync | 0X8007007B | ERROR_INVALID_NAME |  | http:/// used (notice there are three slashes). |
| HttpClient::GetAsync | 0X8000000E | E_ILLEGAL_METHOD_CALL |  | An schema other than HTTP or HTTPS was used. |
| HttpClient::GetAsync | 0x80000013 | RO_E_CLOSED |  | HttpClient or filter has been disposed. |
| HttpClient::GetAsync | 0x80072EFF | ERROR_INTERNET_CONNECTION_RESET | The connection with the server was reset | Server aborts connection during SSL negotation. |
| HttpClient::GetAsync | 0x80072F0D | ERROR_INTERNET_INVALID_CA | The certificate authority is invalid or incorrect | User clicks Cancel instead of selecting a certificate using the UI. |
| HttpClient::SendRequestAsync |  | E_ILLEGAL_METHOD_CALL |  | HttpRequestMessage has been already sent. |
| HttpClient::SendRequestAsync |  | E_ILLEGAL_METHOD_CALL |  | HttpRequestMessage.RequestUri is null. |
| HttpClient::SendRequestAsync completion | 0x80072EE7 | WININET_E_NAME_NOT_RESOLVED |  | No network access available and a domain name given as URI. |
| HttpClient::SendRequestAsync completion | 0x80072EFD | WININET_E_CANNOT_CONNECT |  | No network access available and an IP address given as URI. |
|  | 0x80072F73 | ERROR_HTTP_PUSH_STATUS_CODE_NOT_SUPPORTED |  |  |
| HttpClient | 0x80072F74 | ERROR_HTTP_PUSH_RETRY_NOT_SUPPORTED |  | Control Channel Trigger with client certificate not supported. |
|  | 0x80072F75 | ERROR_HTTP_PUSH_ENABLE_FAILED |  |  |
| IInputStream::ReadAsync completion | 80072EFF | WININET_E_CONNECTION_RESET | The network adapter is disconnected. |  |





[msdn_json]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh770289.aspx

