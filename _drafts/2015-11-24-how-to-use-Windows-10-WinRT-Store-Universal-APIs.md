---
layout: post
title: How to use Windows 10 Runtime/Store/Universal APIs in a Desktop/Console App?
date: 2015-11-24 00:00:00.000000000 -08:00
tags: [WinRT, Windows Runtime, Windows Store Apps, UWP, Windows, MSDN, C#, Windows 10]
---

1. Create a Desktop App or Console App.
2. In **Solution Explorer**, right click the project name and select **Unload Project**.
3. Right click the project name and select **Edit MyApp.csproj** file.
4. Add `<TargetPlatformVersion>` within the `<PropertyGroup>` tags:

        <PropertyGroup>
            <TargetPlatformVersion>10.0</TargetPlatformVersion>
        </PropertyGroup>

4. Right click the project name again and select **Reload Project**.
5. Right click **References** and select **Add Reference...**.
6. In the left column select **Windows > Core** and from the list check **Windows.Data** (or the namespace that contains the type you intend to use).
7. You will probably need to also reference **Windows.Foundation**.
8. Now, in the left colum select **Browse** and then click **Browse...**.
9. Go to **C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETCore\v4.5** and select **System.Runtime.dll**.
10. If you need to use `async` and `await`, click **Browse...** again and include **System.Runtime.WindowsRuntime.dll** too.

Done. Happy coding!

