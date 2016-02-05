---
layout: default
title: Projects / DuckDuckGo Instant Answer Regression Tester
---

# Instant Answer Regression Tester

I was fortunate to do some contract work for [DuckDuckGo](https://duckduckgo.com/) when they needed a way to test their  Instant Answers library. [Instant Answers](https://duck.co/help/features/instant-answers-and-other-features) are keywords that run a command on DuckDuckGo search engine. 

Their [Instant Answer platform](http://duckduckhack.com/) is open source, so anyone can submit one as long as they're open to do a bit of coding. [Here's an example](https://duckduckgo.com/?q=ducksay+hello+world!&ia=ducksay) of one I made that is triggered by the keyword **ducksay**.

![ducksay](/images/projects_ddg3.png)


## The Challenge

Figure out a way to detect when Instant Answers break. Write a tester that checks all of them (around 300) in less than 5 minutes.


## First approach

The first approach was to look for Javascript errors. Initially I was  
tasked with testing the [Spice IAs](https://github.com/duckduckgo/zeroclickinfo-spice) which are written in Javascript.

After visiting an IA page with [Phantom.js](http://phantomjs.org/), a script was injected which added an error handler to send results back to the [Node.js](https://nodejs.org/en/) driver.

I discovered:

- Phantom.js is not the most stable
- Many errors were due to an IA's reliance on a third party API that had changed
- Other types of errors occurred as well, such as the wrong instant answer being triggered
- This approach wasn't able to detect visual changes such as broken image links or changes to css.

## Second approach

The second approach used image comparison. It's a simple solution that detects most problems. It's also softer when 

- It runs in 30 seconds when using 4 instances of Chrome on a Macbook Air
- Uses WebDriver to control them
- Injects a script which sends the coordinates of the bottom of the IA. 
- [ImageMagick](http://www.imagemagick.org/) uses the coordinates to crop a screenshot of the IA before doing an image comparison

![duckducktest](/images/projects_ddg1.png)

When a change is detected it looks like this:

![duckducktest](/images/projects_ddg2.png)


Here's the [GitHub repo](https://github.com/csytan/duckducktest) of an older version.

