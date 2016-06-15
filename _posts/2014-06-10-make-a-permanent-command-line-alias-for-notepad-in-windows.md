---
layout: post
title: Make a permanent command line alias for Notepad++ in Windows.
date: 2014-06-10 19:47:23.000000000 -07:00
categories: []
tags:
- Command Line
- Command Prompt
- Notepad++
- Windows
status: publish
type: post
published: true
permalink: /2014-06-11/make-a-permanent-command-line-alias-for-notepad-in-windows
---

Are you a huge fan of <a href="http://notepad-plus-plus.org/">Notepad++</a> like I am?

Well, if adding Notepad++ to the path is not enough for you:


{% highlight plaintext %}
c:\> set path=%path%;c:\Program Files (x86)\Notepad++
{% endhighlight %}

And registering the Notepad++ shell extensions:

{% highlight shell %}
regsvr32.exe "c:\Program Files (x86)\Notepad++\NppShell_06.dll"
{% endhighlight %}

Then, you may want to create a command line alias, so instead of typing:

{% highlight shell %}
c:\> notepad++ something.txt
{% endhighlight %}

You only type:

{% highlight shell %}
c:\> np something.txt
{% endhighlight %}

And still enjoy the benefits of not renaming the *notepad.exe* binary.

## Option 1

As [ITpraktyk][ITpraktyk] suggested me, create a link using *mklink* from and Administrator command prompt:

{% highlight shell %}
c:\> mklink "c:\windows\system32\np.exe" "c:\program files (x86)\Notepad++\notepad++.exe"
{% endhighlight %}

Fast and simple.

## Option 2

### Step 1

Create a batch script that registers the alias and save it as <strong>notepadAlias.cmd</strong>

{% highlight shell %}
@echo off
doskey np=notepad++ $*
{% endhighlight %}

### Step 2

From an administrator command prompt run the following command:

{% highlight shell %}
reg add "HKCU\Software\Microsoft\Command Processor" /v Autorun /t REG_SZ /d "c:\path\to\notepadAlias.cmd" /f
{% endhighlight %}

Make sure to replace <strong>C:\path\to</strong> with the path where you saved the batch script.

This registry value will execute the batch script each time a command line is started.

### Step 4

Open a new command line, type <strong>np</strong> and see Notepad++ come to the foreground.

[ITpraktyk]:https://twitter.com/ITpraktyk
