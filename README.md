# Long Trails
[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Overview](#overview)
2. [Features](#features)
3. [Future Enhancements](#future-enhancements)
4. [Acceptance Criteria](#acceptance-criteria)
5. [Website Preview](#website-preview)
6. [Technologies](#technologies)
7. [Collaborators](#collaborators)
8. [Resources](#resources)

## Overview

### Description

When you're searching for powder, the last thing an avid skier or boarder wants to do is open up tons of different website searching for the best place to ski with the least travel issues. In the past, you'd have to go to Google Maps for Driving Directions, your favorite weather website for weather info, and each individual resort's website for snow condition. Not cool Bro. Well, the Powder Bound app puts all this information into one convenient location allowing you to plan your stoke with ease. Powder Bound allows you to select your favorite Colorado ski destination to quickly see snow conditions, driving directions, and weather forecast information. It's everything you need to hit the slopes, strap in, and shred the gnar when it's dumping!

### User Story

```
As an active skier in Colorado, I want to plan my ski adventures using critical information
about the travel process such as weather, driving directions, snow conditions, and more.
```

## Features

This app includes features that allows the user to view, add, update and delete blog posts as well as add comments to posts. It includes a variety of features such as login, logout, signup, add comments, add blog posts, edit blog posts and delete blog posts as well as varies views..

1. Model/Database: mysql2, sequalize, , mockaroo.com (for mock seed data)
2. View: handlebars, express-handlebars, Javascript, HTML, CSS, FontAwesome
3. Controller/Router: express
4. Helpers: bcrypt, dotenv
5. Sessions/Cookies: connect-sessions-sequalize
6. Deployed Site: Heroku
7. Project Management/Repo: Github

## Future Enhancements

1. Sync the weather with driving directions so the user knows what the weather is forecasted to be when they get to various waypoints on their route.
2. Display all SNOTEL stations in Colorado on the map to provide info for backcountry skiers.
3. Add travel alerts to the driving directions display.
4. Use secure authentication and server side storage for user profiles
5. Increase robustness of input validation
6. Refactor code to single purpose functions

## Acceptance Criteria

```
GIVEN I'm a frequent skier I want an easy way to plan my trip

WHEN I go to my planner
THEN I am presenteed with map that displays the resorts in Colorado

WHEN I click on a resort
THEN I am presented with resort weather condition base depth, 24 hour totals, forecast

WHEN I click on resort
THEN I am presented with button to obtain get step by travel directions
THEN I am presented with step by step travel directions at checkpoints with weather

WHEN I want to see snow total by resort
THEN I can view a summary

WHEN I want to set my profile
THEN I click on the profile button (in the upper right corner)

WHEN I go to my profile
THEN I can set my preferred started location, my preferred mountains, preferred ski pass

```
## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run "npm install" (to install the dependencies).

Setup the Database Schema: 
- (1) Update or add an .env file. Include the fields below in the .env file. Note that the .env variables are used in the conf folder, connection.js file.

  * DB_NAME="longTrails_db"
  * DB_USER="<mySQL user name>"
  * DB_PASSWORD="<mySQL user password>"

Seed the Database: 
- Run Server: From the root directory, run either "npm run watch" to start nodeman or "node server.js".
- Seed Database: (a) To create the database, run "SOURCE ./db/schema.sql" in mySQL, (b) To create the database tables, from the terminal, run "npm run start" or "npm run watch", (c) To seed the database tables, run "npm run seed" or "node ./seeds/index.js".

Note that the seed will also create entries for the user table including hashed passwords. When loggin into the app these user seeds can be used as test email address. Either obtain an email address from the user table (SELECT * FROM user;) or use an option noted below:

  * email: egerok3@ifeng.com, password: "password1234"
  * email: cmcglynn8@vimeo.com, password: "password1234"

If you'd like to use NPM nodemon as/if you make changes to the code, please install nodemon as a development dependency using "npm install --save-dev nodemon" (see https://www.npmjs.com/package//nodemon). 

## Tests

No tests at this time.

## Website Preview

### Static Screenshots

<img alt="Map" src="./assets/images/screenshot_map.png">
<img alt="Dashboard" src="./assets/images/screenshot_dashboard.png">
<img alt="Profile" src="./assets/images/screenshot_profile.png">

### Video Preview

<img src="./assets/images/powder-bound.gif" width="" height=""/>

## Technologies

1. HTML
2. CSS
3. JavaScript
4. GitHub (website hosting and source code management)
5. [Moment.js v2.27.0](https://momentjs.com/)
6. [jQuery v3.6.0](https://jquery.com/)
7. [Bulma v0.9.4](https://bulma.io/)
8. [Leaflet v1.8.0](https://leafletjs.com/)

### 3rd Party Application Programming Interfaces

1. [Open Weather](https://openweathermap.org/api/one-call-3)
2. [Powderlin.es - SNOTEL DATA](http://powderlin.es/api.html) - Special thanks to Bobby Marko for helping us navigate the CORS and mixed content issues with his API.
3. [Google Static Maps](https://developers.google.com/maps/documentation/maps-static/overview)
4. [MapQuest Directions](https://developer.mapquest.com/documentation/directions-api/)
5. [MapQuest GeoCoding & Reverse Geocoding](https://developer.mapquest.com/documentation/geocoding-api/)
6. [MapQuest Static Maps](https://developer.mapquest.com/documentation/static-map-api/v5/)
7. [MapQuest Search Ahead](https://developer.mapquest.com/documentation/searchahead-api/)
8. [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

### Dependencies

1. [VS Code Live Server](https://ritwickdey.github.io/vscode-live-server/)

## Collaborators

1. Alex Cleveland: [Github LINK](https://github.com/AClevel5/)
2. Patrick Radcliff: [Github LINK](https://github.com/TBD_TBD)
3. Rod Bennett: [Github LINK](https://github.com/RodBennett)
4. Steve Calla: [Github LINK](https://github.com/stevecalla)

## Resources

1. Deployed Site URL - Heroku: TBD
3. GitHub Repo: <https://github.com/stevecalla/long-trails>
3. GitHub Projects: <https://github.com/users/stevecalla/projects/22>

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)