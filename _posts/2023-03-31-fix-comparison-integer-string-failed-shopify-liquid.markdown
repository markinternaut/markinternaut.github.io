---
layout: main
title:  "How to Fix Comparison of Integer With String Failed Shopify Liquid?"
date:   2023-03-31 13:56:00 +0800
categories: post
image: "how-to-fix-comparison-of-integer-with-string-failed-shopify-liquid.jpg"
---

![{{ page.title | downcase | append: ' featured image'}}](/assets/{{ page.image }})

Have you run into this error while coding Shopify Liquid? Well, you are in the right place.

Here are the reasons why the comparison of an integer with a String error occurs.

## Case 1: Don’t Use Capture Tags

Don’t use Capture Tag **{% raw %}{% capture %}{% endraw %}** if you are declaring an integer. All of the variables declared using the capture tag will be stored as strings.

{% highlight liquid %}
{% raw %}

{% capture age %}12{% endcapture %}

{% endraw %}
{% endhighlight %}

To fix it, you can just use Assign Tag **{% raw %}{% assign %}{% endraw %}**.

{% highlight liquid %}
{% raw %}

{% assign age = 12 %}

{% endraw %}
{% endhighlight %}

## Case 2: Incorrect Object Key

For example:

{% highlight liquid %}
{% raw %}

{{ price }} is wrong unless you are going to declare it like this {% assign price = product.price %}.
If not, it should be change to {{ product.price }}

{% endraw %}
{% endhighlight %}

## Case 3: Incorrect Variable Type

If you are not sure how the value is generated, the best fix is to convert the string into an integer.

{% highlight liquid %}
{% raw %}

{% number = number | plus: 0 %}
{% number = number | times: 1 %}

{% endraw %}
{% endhighlight %}