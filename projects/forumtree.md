---
layout: default
title: Projects / Forum Tree
---

# Forum Tree

I created this project back in 2009 when I thought a horizontal tree-based forum layout was a good idea.

It parses the Hacker News API, and generates a tree style view. Unfortunately it was designed to run on AppEngine, and due to lack of maintenance no longer works. Here's the only low-res picture I have of it.

![ForumTree](/images/projects_forumtree.png)

## Features

- Edges draw with Canvas (back when Internet Explorer [didn't support it](https://github.com/arv/ExplorerCanvas))
- Used Javascript for layout (before we had [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))
- It runs pretty fast even on slow browsers
- Responsive design (before we had media-queries)
- Runs on [Tornado](http://www.tornadoweb.org/en/stable/) and [Google App Engine](https://en.wikipedia.org/wiki/Google_App_Engine)


## Lessons Learned

- It's good for people who like to skim, the highest rated conversation path is  shown first
- Horizontal layouts like this require too much clicking and scrolling
- Don't optimize for speed before considering usability
- Be careful when investing in platforms

Here is the [Github repo](https://github.com/csytan/forumtree).
