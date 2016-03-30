---
layout: default
title: Projects / Forum Tree
---

# GoodSir (2011)

GoodSir was a site for movie metadata. I designed it to be the go-to source for movie info from all my favorite sites.

![Movie Page](/images/projects_goodsir.png)

Why the name? **GoodSir.org** seemed like a decent domain after an entire evening of trying to find a domain related to movies that wasn't squatted.

## Data sources

The site was run on AppEngine and pulled data in from multiple sources:

- Movie descriptions: [Wikipedia's API](https://www.mediawiki.org/wiki/API:Main_page)
- Movie images, categories, and search: [Freebase](https://en.wikipedia.org/wiki/Freebase) (RIP. It was a cool service while it lasted)
- Movie ratings: [Netflix](https://www.google.com/#q=netflix+api), [IMDb](http://www.imdb.com/)
- Recommendations: Netflix, IMDb

## Lessons Learned

- 3rd party APIs break **all the time**. Every API you rely on with takes away from your overall reliability. Choose with caution.
- Scraping IMDb was actually more reliable than using Netflix's API
- AppEngine gets expensive when you need to pull so much data
- Converting between different service's IDs took a lot of work


## Screen Shots

Movie overview:

![GoodSir, Full movie page](/images/projects_goodsir2.png)

Categories:

![GoodSir Categories](/images/projects_goodsir1.png)




