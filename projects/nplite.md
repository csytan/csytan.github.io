---
layout: default
title: Projects / Network Planner Lite
---


# Network Planner Lite (2014)

NPLite was an experiment created to get a better acquainted with mapping technology and to contribute to [Network Planner](http://networkplanner.modilabs.org/); a tool for electrification planning in developing countries.

This project is hosted on [GitHub](https://github.com/SEL-Columbia/nplite).

## Try it out

1. Go to [https://sel-columbia.github.io/nplite/](https://sel-columbia.github.io/nplite/)
2. Click on the icon in the upper right corner to load the example dataset.

![building edges](/images/projects_nplite1.png)

This loads an example with over 10k communities (represented by **green dots**) in Myanmar and generates a minimum spanning tree to connect them. **Blue lines** represent the existing power grid and potential connection points. **Orange lines** represent impassable terrain.

The generation process runs a modified version of Kruskal's algorithm and creates about 40k proposed power lines (**in blue**). It runs in about a minute on a Macbook Air.

![Finished building network](/images/projects_nplite2.png)


## Built with

- [Leaflet](http://leafletjs.com/): a Javascript mapping library
- [D3.js](http://d3js.org/): used to build a custom leaflet SVG layer that supports thousands of nodes and edges
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers): to generate a minimum spanning tree without slowing down the UI
- [RBush.js](https://github.com/mourner/rbush): spatial indexing used to speed up tree generation
- [Proj4js](http://proj4js.org/): for converting PROJ.4 files to [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System#A_new_World_Geodetic_System:_WGS_84) coordinates

