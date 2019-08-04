---
layout: post
title: WCF Basics
date: 2016-06-09 00:00:00.000000000 -07:00
tags: [WCF, ASP.NET, ASP.NET WebApi, C#, MSDN]
category: .net
icon: send
---

Before ASP.NET WebApi, there was a technology called Windows Communication Foundation (WCF). WCF was mainly created to communicate between two systems using web services based on the SOAP protocol. But then, REST web services (based only on the HTTP protocol) gained wide popularity. WCF also added support for REST. But, ASP.NET WebApi is by far the preferred technology.

However, there are situations in which, as a developer, you do need to deal with WCF services, such as when maintaining a legacy system. Here are the basics you need to know.
 
How the web service is exposed is defined in <binding> tags in the web.config file. There are three kinds of bindings:

- `webHttpBinding` is an HTTP-based binding with XML or JSON.
- `basicHttpBinding` and `wsHttpBinding` are SOAP-based bindings. A discussion of these two bindings are beyond the scope of this post. For more details, check [this stackoverflow answer][basichttpbinding-vs-wshttpbinding].
 
When using the `webHttpBinding` binding, you also need to expose an `endpointBehaviors` in the web.config file.

{% highlight xml %}
<configuration>
  <system.serviceModel>

    <behaviors>
      <endpointBehaviors>
        <behavior name="">
          <webHttp
            defaultBodyStyle="Bare"
            defaultOutgoingResponseFormat="Json"
            faultExceptionEnabled="true"
            helpEnabled="true"/>
        </behavior>
      </endpointBehaviors>
    </behaviors>

    <protocolMapping>
        <add binding="webHttpBinding" scheme="http" />
    </protocolMapping>

    <serviceHostingEnvironment
      aspNetCompatibilityEnabled="true"
      multipleSiteBindingsEnabled="true" />
  </system.serviceModel>
</configuration>
{% endhighlight %}
 
You define a WCF service by creating an interface and marking it with a `[ServiceContract]` attribute. For example:
 
{% highlight csharp %}
[ServiceContract]
public interface IService1
{
    // TODO: Add your service operations here
}
{% endhighlight %}
 
You also have to mark the methods you want to expose through REST with the `[WebGet]` attribute or the `[WebInvoke]` attribute. `[WebGet]` is for HTTP GET requests, and `[WebInvoke]` is for other HTTP methods, such as POST or PUT.
 
{% highlight csharp %}
// IService1.cs file.
[ServiceContract]
public interface IService1
{
    [WebGet]
    int GetRandomNumber();
}

// Service1.svc.cs file.
public class Service1 : IService1
{
    public int GetRandomNumber()
    {
        Random random = new Random();
        return random.Next();
    }
}
{% endhighlight %}
 
Once you run the service, there is a nice trick to get more information about the available endpoints. For example, if your service is called WebService1, then go to *http://localhost:45317/Service1.svc/help* to get the details.
 
To pass values to the web service, pass them in the query string:
 
 
{% highlight csharp %}
// Call as http://localhost:45317/Service1.svc/GetData?value=999
[ServiceContract]
public interface IService1
{
    [WebGet]
    string GetData(int value);
}
{% endhighlight %}


You can send and receive primitive types by default, but to receive or return complex types you have to define them in classes and make these classes serializable. However, if you use the `[Serializable]` attribute, it will create ugly property names ending with *k__BackingField*. 


{% highlight csharp %}
// IService1.cs file.
[ServiceContract]
public interface IService1
{
    [WebGet]
    FooThing GetFoo();
}

// FooThing.cs file.
[Serializable]
public class FooThing
{
    public string FooText { get; set; }
}

// Output:
// {"<FooText>k__BackingField": "The foo fox jumped over the lazy dog."}

{% endhighlight %}


To serialize and keep the original property names use the `[DataContract]` attribute instead, and mark each property that you want to be serialized with a `[DataMember]` attribute.


{% highlight csharp %}
// FooThing.cs file.
[DataContract]
public class FooThing
{
    [DataMember]
    public string FooText { get; set; }
}

// Output:
// {"FooText":"The foo fox jumped over the lazy dog."}
{% endhighlight %}

 
And that's it.

[basichttpbinding-vs-wshttpbinding]: http://stackoverflow.com/questions/2650785/basichttpbinding-vs-wshttpbinding-vs-webhttpbinding

