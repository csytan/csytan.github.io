---
layout: default
title: Projects / Remote Debugginator
---

# The Remote Debugginator

The Remote Debugginator is a device created for the [Acacia Irrigation Project](http://acaciairrigation.org/) to enable remote access to a LAN network via 3g.

![The Remote Debugginator](/images/projects_rd1.jpg)

We have three irrigation sites serving about 20 farmers' fields. Each of these sites has a Raspberry Pi collecting data on sunlight, temperature, power consumption, and pump usage.

While working on the the project we encountered a lot of difficulty debugging and collecting data from our irrigation sites remotely. 

![Site 3 - View from a tree](/images/projects_rd9.jpg)

Collecting data takes a lot of effort. Typically we drive to our sites from Louga (where we are staying) which takes about 45 minutes each way. It's not an easy drive, especially after the rainy season in Senegal.

The road is extremely sandy and frequently littered with deep potholes where the asphalt has collapsed into the soil.

![Getting stuck in the sand](/images/projects_rd8.jpg)


## Parts List
- [Raspberry Pi Kit](http://www.amazon.com/Raspberry-Complete-Starter-Preloaded-Heatsink/dp/B00MV6TAJI/)
- [Case + Screen for RPi](http://www.amazon.com/Tontec%C2%AE-Raspberry-Display-Touchscreen-Transparent/dp/B00NANNJLQ/)
- [USB battery pack (10000 mAh)](http://www.amazon.com/Anker-10000mAh-Portable-External-Technology/dp/B009USAJCC/)
- 3g USB dongle
    - [Linux compatible dongles](http://elinux.org/RPi_VerifiedPeripherals#USB_3G_Dongles) 
    - Make sure to [check for cell provider support](http://www.worldtimezone.com/gsm.html)
- [Portable keyboard](http://www.amazon.com/Rii-mini-X1-Raspberry-KP-810-10LL/dp/B00I5SW8MC/)
- [Digital Ocean](https://www.digitalocean.com/) instance
- M2M Sim card. Here are some providers:
    - http://www.podsystemm2m.com/
    - http://www.embeddedworks.net/m2m-data.html
    - http://neo.aeris.com/pricing/plans-pricing/


## Raspberry Pi setup

The Pi was set up using the default [Raspbian distro](https://www.raspbian.org/).

Setting up screen:

- http://s3.amazonaws.com/ttbox/35screen.zip 
- http://s3.amazonaws.com/ttbox/35calibrate.zip 

Connecting to wifi via command line:

- https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md

Preventing Edimax wifi adapter from sleeping during shell sessions when idle:

- https://www.raspberrypi.org/forums/viewtopic.php?t=61665

Booting directly into shell:

- http://stackoverflow.com/a/17830633


## Boot scripts

Add the following files to your home folder

    run.sh
    3g.sh
    tunnel.sh

Create a file named **run.sh** in your home folder:

{% highlight bash %}
#!/bin/bash

# Tip: You can press "Ctrl + a" twice to switch between windows

# Starts a new detached screen session (-dm) named "pi" (-S) with the 
# window title "3g" (-t), and runs 3g script
screen -dmS pi -t 3g /home/pi/3g.sh

# Connects to existing session "pi" (-S) and runs command (-X). 
# When screen is run within screen, it creates a new window named "tunnel" (-t)
# in the current session 
screen -S pi -X screen -t tunnel /home/pi/tunnel.sh

# Attach to 3g window
screen -r pi -p 3g
{% endhighlight %}


Create a file named **3g.sh** in your home folder:
    
{% highlight bash %}
#!/bin/bash

# Start UMTSKeeper & Sakis3g

echo 'starting umtskeeper'

# Using Orange Senegal defaults:
sudo /home/pi/umtskeeper/umtskeeper --sakisoperators "USBINTERFACE='3' OTHER='USBMODEM' USBMODEM='1199:68a3' APN='internet' APN_USER='internet' APN_PASS='0'" --sakisswitches "--sudo --console"
{% endhighlight %}


Create a file named **tunnel.sh** in your home folder:

{% highlight bash %}
#!/bin/bash

while true;
do
    echo 'waiting for ppp interface'
    # Check to see if ppp0 is the default gateway
    # http://stackoverflow.com/a/15973156/86568
    if [[ `ip -4 route list 0/0` == *'ppp0'* ]]; then
        echo 'starting reverse tunnel'
        autossh -R 22222:localhost:22 ubuntu@159.203.95.60
        echo 'tunnel connection error'
        sleep 60
    fi
    sleep 5
done
{% endhighlight %}



Setting up scripts:

    sudo apt-get install screen

Add this to **~/.screenrc**

    defshell -bash
    multiuser on
    acladd pi

Add this to **~/.bashrc**

{% highlight bash %}
if [ -n "$STY" ]; then
    # Screen session
    echo 'screen session'
elif [ -n "$SSH_CLIENT" ] || [ -n "$SSH_TTY" ]; then
    # SSH Session
    # http://serverfault.com/a/506267
    echo 'ssh session'
else
    # Main session
    echo 'main session'
    ~/run.sh
fi
{% endhighlight %}


Add to **~/.ssh/config** so that the client exits after error (usually it will hang) and disconnects after 3 x 60 seconds of unresponsiveness.

    ExitOnForwardFailure yes
    ServerAliveInterval 60



## Digital Ocean server

Add this to **sudo nano /etc/ssh/sshd_config** so that the connection times out after 3 x 60 seconds of unresponsiveness.

    ClientAliveInterval 60



    
## Setting up the reverse tunnel


<iframe width="100%" height="330" src="https://www.youtube.com/embed/kkuggWvZ5NY" frameborder="0" allowfullscreen></iframe>

![Alt text](/images/projects_rd2.jpg)
![Alt text](/images/projects_rd3.jpg)
![Alt text](/images/projects_rd4.jpg)
![Alt text](/images/projects_rd5.jpg)
![Alt text](/images/projects_rd6.jpg)
![Alt text](/images/projects_rd7.png)
