---
layout: default
title: Projects / Datos
---


# Datos (2015)

Datos was an experiment to bring the [iPython notebook](https://ipython.org/notebook.html) style of data analysis to the browser. It was created when I started to learn  [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for the purpose of offline storage.

I created a library [named idb.js](https://github.com/SEL-Columbia/datos/blob/gh-pages/idb.js) that wraps the IndexedDB API and provides [jQuery-like](https://jquery.com/) chaining through the use of [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). 

![datos](/images/projects_datos.png)


## Try it out

1. Go to <https://sel-columbia.github.io/datos/>
2. Remember to press **SHIFT + ENTER** to execute each code block


## Lessons learned

- Use of the IndexedDB API requires deeply nested callbacks
- Wrapping it is the way to go, especially if you want to maintain readability and ease of use
- It has many [strange bugs](https://github.com/SEL-Columbia/datos/blob/gh-pages/idb.js#L154)
- You can bulk load large CSVs (it's a hidden feature) with thousands of rows and analyze them fairly quickly
- It's annoying how native Javascript Promises require an extra level of nesting
- Web workers are the way to go when working with a lot of data


This project is hosted on [GitHub](https://github.com/SEL-Columbia/datos).
