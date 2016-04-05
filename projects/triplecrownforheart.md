---
layout: default
title: Projects / Triple Crown for Heart
---

# Triple Crown for Heart Donor Pages

The Triple Crown for Heart is a charity bike event in [Vancouver, BC](https://en.wikipedia.org/wiki/Vancouver) encompassing three mountains: [Seymour](https://en.wikipedia.org/wiki/Mount_Seymour), [Grouse](https://en.wikipedia.org/wiki/Grouse_Mountain), and [Cypress](https://en.wikipedia.org/wiki/Cypress_Mountain_Ski_Area). All proceeds of this event go to the [BC Children's Heart Centre](http://www.bcchildrens.ca/our-services/clinics/childrens-heart-centre).

This project is hosted [on Github](https://github.com/csytan/triplecrownforheart).

![Triple crown for heart](/images/projects_triplecrownforheart1.jpg)

I've been volunteering for this event for the past three years, working on the  rider registration and donation site.

Check it out here: <http://donate.triplecrownforheart.ca>

Each year I've had less free time. It really made me think about how I could be more efficient when creating and maintaining the donation site.

## Project Requirements

1. Rider registration and payments
2. Rider donation pages
3. Emailing when someone has registered or donated


![Triple crown for heart - rider page](/images/projects_triplecrownforheart2.png)


## How it works

One of the first decisions was to ditch the rider registration site for [Wufoo forms](https://www.wufoo.com/). I chose to use Wufoo for its PayPal support and simple API. It also has a friendly user interface for when the organizers need to update the form or download the rider data.

- A script runs in the background every five minutes fetching information from [Wufoo](https://www.wufoo.com/) and PayPal
- It updates JSON files in the GitHub repo
- It also emails newly subscribed riders and donors using [Mailgun](https://www.mailgun.com/)
- The repo is hosted on [GitHub pages](https://pages.github.com/)
- The page is a single page app that renders data from the JSON files
- When a user donates using PayPal, a pass-through variable lets us also save the rider id, donor name, and message


![Triple crown for heart - rider page](/images/projects_triplecrownforheart3.png)


## Pros and cons of this approach

Pros:

- Free hosting
- No need to maintain a server year round
- Easy to modify for next year
- No need to write any backend registration code

Cons:

- Updates are slow, they take around 5 minutes
- PayPal only (Stripe requires a backend)
- Updates are inefficient, won't scale well to a very large numbers of riders



