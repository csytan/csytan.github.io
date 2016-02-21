---
layout: default
title: Projects / Acacia Irrigation Software
---

# Acacia Irrigation Software (2015)

[Acacia Irrigation](http://acaciairrigation.org/) is a batteryless solar irrigation project by the [Sustainable Engineering Lab](http://sel.columbia.edu/). 

The project supports 21 farmers in Senegal through three system. Each system is controlled using a Raspberry Pi and can operate 7 pumps.

The [Raspberry Pi](https://www.raspberrypi.org/) handles these external inputs:

- Pyranometer: measures light to estimate available power
- Smart meters: measures pump power consumption
- Temperature sensor: used to estimate panel efficiency
- Relays: to control individual pumps

The software was built using:

- Python 3.4, running an [asyncio](https://docs.python.org/3/library/asyncio.html) event loop
- [Tornado](http://www.tornadoweb.org/en/stable/) for the web interface
- [Peewee](https://peewee.readthedocs.org/en/latest/) and [SQLite](https://www.sqlite.org/) to store data
- [Minimal Modbus](https://minimalmodbus.readthedocs.org/en/master/) to interface with the smart meters
- [Rpi.GPIO](https://pypi.python.org/pypi/RPi.GPIO) to control the relays


## Screenshots

Main screen showing the 7 customers and their pumping status:
![](/images/projects_acacia1.png)

Pump scheduling and configuration screen:
![](/images/projects_acacia2.png)

Pump usage history:
![](/images/projects_acacia3.png)

System usage history (light readings):
![](/images/projects_acacia4.png)

System configuration:
![](/images/projects_acacia5.png)


## More info

Unfortunately, the software is not available as open source. However, you can find out more details about the architecture in the slideshow below:

<iframe src="https://docs.google.com/presentation/d/1JQqUMmQ65hfCj_aRvTwB-pCWMtYcjA2sYlBB83bqfG0/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="350" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

