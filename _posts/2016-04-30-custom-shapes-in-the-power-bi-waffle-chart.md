---
layout: post
title: Custom Shapes in the Power BI Waffle Chart
date: 2016-04-30 00:00:00.000000000 -08:00
tags: [example, avatar, shapes, available code, image as a field, infographics]
---

Hello,

The [Waffle Chart][waffle-chart] is a Power BI visualization that allows you to easily and visually compare data as percentages. One powerful feature of the Waffle Chart is that it supports custom shapes, as can be seen in this [video][video-1] and this [other video][video-2].

The custom shapes can be anything that can be represented with an SVG path, such as these:

{% include image.html url="/assets/images/power-bi-waffle-chart.png" description="Power BI Waffle Chart" %}

Once you have an SVG file, you can obtain a path by uploading it at [http://kiewic.com/paths][paths] and you will get a list of the paths that make up your SVG image.

{% include image.html url="/assets/images/power-bi-waffle-chart-kiewic-paths.png" description="kiewic.com paths website screenshot" %}

Select the path in one of the boxes (there may be only one), copy it, and use it as a string value in your Power BI input file (a CSV file is the easiest):

<code>47,Transit,"M77.619,14.775c-1.098-5.528-4.622-7.731-9.931-9.93C62.499,2.668,50.02,0.079,40.794,0                c-9.243,0.079-21.722,2.668-26.948,4.846c-5.271,2.199-8.795,4.402-9.875,9.93L0,45.284v42.091h6.84v6.564                c-0.027,8.071,11.745,8.071,11.75,0v-6.564h21.737h0.054H63v6.564c-0.014,8.071,11.759,8.071,11.75,0v-6.564h6.84V45.284                L77.619,14.775z M23.996,7.715h16.385h17.212c3.286-0.009,3.286,4.949,0,4.965H40.327H23.996                C20.694,12.664,20.694,7.706,23.996,7.715z M12.687,74.191c-3.101-0.015-5.631-2.542-5.627-5.682                c-0.004-3.099,2.526-5.627,5.627-5.627c3.136,0,5.665,2.528,5.683,5.627C18.352,71.649,15.823,74.177,12.687,74.191z                 M40.381,48.482H10.426c-2.925,0.028-3.54-2.081-3.253-4.192l3.088-22.177c0.425-2.67,1.336-4.443,4.854-4.468h25.213h26.149                c3.498,0.025,4.412,1.797,4.854,4.468l3.09,22.177c0.266,2.112-0.348,4.22-3.256,4.192H40.381z M68.848,74.191                c-3.1-0.015-5.628-2.542-5.628-5.682c0-3.099,2.528-5.627,5.628-5.627c3.137,0,5.667,2.528,5.681,5.627                C74.515,71.649,71.985,74.177,68.848,74.191z"</code>

[Download full CVS file example here][example-1].

And that is it.

## Live Example

<iframe style="width: 100%; height: 600px;" src="https://app.powerbi.com/view?r=eyJrIjoiYmEwYjg4Y2MtMTlhZS00ODhlLWFiZDUtYjgxZmIzNGUzODAyIiwidCI6Ijk1Yjk2M2ZiLTgxNDgtNGNmNS05M2UwLWE1YWU2OTZlYjY3YiIsImMiOjZ9" frameborder="0" allowFullScreen="true"></iframe>


## Troubleshooting

### The shapes are not centered?

You can get better results by aligning your path to the top left corner. That is something the online tool does not support at this time, but you can align a path using other image editors, such as Adobe Illustrator or Inkscape.

### String length limitation in Power BI Web?

Yes, starting February 2016, the string values are limited in the Web client. If the path is very long, it will be truncated. However, this limitation does not exist in the Desktop client.

### Is the Waffle Chart open source?

Yes, head to the [GitHub repo][github] to get access to the source code.

### Is there a shorter example?

Yes, starts and triangles:

{% highlight plaintext %}
Group,Values,Shapes
A,50,"M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z"
B,75,"M150 0 L75 200 L225 200 Z"
{% endhighlight %}


## Credits

Icons in this article were obtained from the [AIGA collection created by Edward Boatman][edward-boatman]. You can download SVG files from [here][thenounproject], too.

[waffle-chart]: https://app.powerbi.com/visuals/show/WaffleChart
[video-1]: https://www.youtube.com/watch?v=1vRqYUsm3Vk
[video-2]: https://www.youtube.com/watch?v=7z-UZKkbJaI
[paths]: http://kiewic.com/paths
[example-1]: https://drive.google.com/file/d/0B3v_NS_EPj8-UkIxX3RXTnczcFE/view?usp=sharing 
[github]: https://github.com/kiewic/PowerBI-visuals/tree/waffleChartV2
[edward-boatman]: https://thenounproject.com/edward/collection/aiga/
[thenounproject]: https://thenounproject.com/
[live-example]: https://app.powerbi.com/view?r=eyJrIjoiYzhhM2M0N2QtMmM5Yi00ZGFjLTg4MTItMDgyYjY3YTA1ZjExIiwidCI6Ijk1Yjk2M2ZiLTgxNDgtNGNmNS05M2UwLWE1YWU2OTZlYjY3YiIsImMiOjZ9


