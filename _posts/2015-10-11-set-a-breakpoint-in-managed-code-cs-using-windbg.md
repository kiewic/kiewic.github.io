---
layout: post
title: Set a Breakpoint in Managed Code (C#) Using WinDBG
tags: [MSDN, WinDBG, Windows, Debugging, SOS.dll, C#]
permalink: /2015-10-11/set-a-breakpoint-in-managed-code-cs-using-windbg
---

How to set a breakpoint in managed code using WinDBG?

E.g., breakpoints in the `Main` method and `System.String.Contains` method using the following console application:

{% highlight csharp %}
namespace ConsoleHelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            string foo = "The Unimaginary Friend";

            Console.ReadLine();

            if (!foo.Contains("Hello"))
            {
                Console.WriteLine("Inside if block.");
            }
        }
    }
}
{% endhighlight %}

## Code Already JITTED

If the code is already JITTED, i.e., the code was already compiled from bytecode to machine code, then you can set a breakpoint using `bp`.

E.g.:

Let the program run and pause at `Console.ReadLine()`.

    0:003> .loadby sos clr
    0:003> !EEStack
    ...
    00c3ef94 738d2a0c (MethodDesc 736060a0 +0x11c System.IO.StreamReader.ReadLine())
    00c3efb0 740551ad (MethodDesc 736ad9e0 +0x19 System.IO.TextReader+SyncTextReader.ReadLine())
    00c3efc0 73f54392 (MethodDesc 735f31fc +0x12 System.Console.ReadLine())
    00c3efc8 00e500c1 (MethodDesc 00d437a4 +0x71 ConsoleHelloWorld.Program.Main(System.String[]))
    ...

Find the address of **String.Contains()** using:

    !name2ee *!System.String.Contains

The output tells you the code is already JITTED:

    Module:      73571000
    Assembly:    mscorlib.dll
    Token:       0600033a
    MethodDesc:  735fa768
    Name:        System.String.Contains(System.String)
    JITTED Code Address: 73f21734

Set a breakpoint using `bp`:

    bp 73f21734

Continue the execution, press ENTER and wait until the breakpoint is hit:

    0:003> g
    Breakpoint 0 hit
    eax=028c1228 ebx=00c3f08c ecx=028c2398 edx=028c241c esi=00000000 edi=00c3f000
    eip=73f21734 esp=00c3efcc ebp=00c3efe8 iopl=0         nv up ei pl nz na po nc
    cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00000202
    mscorlib_ni+0x9b1734:
    73f21734 6a00            push    0

Done! The callstack looks like this:

    0:000> !CLRStack
    OS Thread Id: 0x13d4 (0)
    Child SP       IP Call Site
    0092f420 73f21734 System.String.Contains(System.String)
    0092f424 00ba009e ConsoleHelloWorld.Program.Main(System.String[]) [c:\ConsoleHelloWorld\Program.cs @ 17]
    0092f5c0 746c2552 [GCFrame: 0092f5c0] 

The stack objects look like this:

    0:000> !dso
    ESP/REG  Object   Name
    eax      028c1228 System.String    
    ecx      02602398 System.String    The Unimaginary Friend
    edx      026023d4 System.String    Hello
    00C3EFD0 028c1228 System.String
    ...

## Code Not JITTED Yet 

As soon as the debugger starts, configure the debugger to break when **clrjit.dll** loads:

    sxe ld clrjit

Once **clrjit.dll** is loaded, look for the method address:

    !name2ee ConsoleHelloWorld.exe ConsoleHelloWorld.Program.Main

The output tells you the method is not JITTED yet:

    Module:      009d2edc
    Assembly:    ConsoleHelloWorld.exe
    Token:       06000001
    MethodDesc:  009d37a4
    Name:        ConsoleHelloWorld.Program.Main(System.String[])
    Not JITTED yet. Use !bpmd -md 009d37a4 to break on run.

Set a breakpoint using `!bpmd`:

    !bpmd -md 009d37a4 

The breakpoint is pending:

    MethodDesc = 009d37a4
    Adding pending breakpoints...

Continue the execution. Then, the code is JITTED and the breakpoint is hit:

    JITTED ConsoleHelloWorld!ConsoleHelloWorld.Program.Main(System.String[])
    Setting breakpoint: bp 00BA007B [ConsoleHelloWorld.Program.Main(System.String[])]
    Breakpoint 0 hit

Done! The callstack looks like this:

    0:000> !CLRStack
    OS Thread Id: 0x252c (0)
    Child SP       IP Call Site
    008cece4 00b3007b ConsoleHelloWorld.Program.Main(System.String[]) [c:\ConsoleHelloWorld\Program.cs @ 12]
    008cee78 746c2552 [GCFrame: 008cee78] 

**Sources:** [walter's log][walterslog], [SOS Debugging Extension][SOS.dll]



[walterslog]:http://walterslog.blogspot.com/2010/06/setting-breakpoint-in-windbg-at.html
[SOS.dll]:https://msdn.microsoft.com/en-us/library/bb190764(v=vs.110).aspx
