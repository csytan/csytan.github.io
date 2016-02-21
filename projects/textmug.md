---
layout: default
title: Projects / TextMug
---

# TextMug (2014)

TextMug is a paste-bin for Markdown. On this project I learned how to work with [Content Editable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_Editable) and how to [parse Markdown](https://github.com/csytan/textmug/blob/master/static/main.js#L489).

You can try it out here: <https://textmug.com>

The neat thing about TextMug is that when you edit a paragraph you're editing Markdown source. Everything else is rendered text.

## Lessons Learned

- Content Editable is finicky across browsers. Two examples:
    - Key presses don't trigger events on Android's browser (as of 2014)
    - Browsers use different elements as their ["empty" element](https://stackoverflow.com/questions/7224443/force-browser-to-insert-p-tag-when-pressing-enter-in-a-designmode-iframe)
- How to deploy an app on Digital Ocean

## Screenshots

![](/images/projects_textmug1.png)

![](/images/projects_textmug2.png)
