---
layout: default
title: Projects / CozyCal
---

# CozyCal (2015 - Ongoing)

[CozyCal](https://cozycal.com) is my second iteration of an appointment scheduling web-app. It was created for the B2B space and built using the lessons I learned from creating [ResHQ](/projects/reshq/) in 2012. 

You can check it out here: <https://cozycal.com>.

## Design Considerations

- **Built for individuals.** Teams have much more complicated use cases.
- **Google Calendar integration.** GCal has an enormous user base and simple OAuth sign in.
- **Mobile first design.** Simple interface reduces design costs.
- **Embeddable widget.** Easy to install plugins are great for lead generation.

## Software Stack

- Python 3.5 + asyncio + Tornado (for non-blocking goodness)
- Peewee + SQLite
- Nginx reverse proxy and static file serving
- Digital Ocean (hosting & backups)
- Google Domains (mainly for DNS)
- Mailgun
- Google Calendar API
- Stripe


## Screenshots

Onboarding:
![](/images/projects_cozycal1.png)

Onboarding - Creating a service:
![](/images/projects_cozycal2.png)

![](/images/projects_cozycal3.png)

![](/images/projects_cozycal4.png)

Embeddable scheduling widget:

![](/images/projects_cozycal5.png)

![](/images/projects_cozycal6.png)


Customizing embed buttons:

![](/images/projects_cozycal7.png)

Email templates:

![](/images/projects_cozycal8.png)

