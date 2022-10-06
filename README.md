# HiKamp
[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Overview](#overview)
2. [Acceptance Criteria](#acceptance-criteria)
3. [Features](#features)
4. [Technologies](#technologies)
5. [Website Preview](#website-preview)
6. [Installation](#installation)
7. [Tests](#tests)
7. [Future Enhancements](#future-enhancements)
8. [Collaborators](#collaborators)
9. [Contributing](#contributing)

### [Heroku Deployment Link](https://hikamp.herokuapp.com/)

## Overview

### Description

Want to enjoy weekend out camping in the National Parks but unsure of where to go and what to do? HiKamp is here to help you become a campsite guru. HiKamp will provide you with information such as Weather, Access, Fees, Reservations, and more in a single screen. You will be able to also see other campers reviews and comments to get a better idea of what to expect. 

## User Story
```
As an outdoors person I want a quick and painless way to find uniform campsite data within the National Park System. HiKamp is the place to go to cut down on your research time and provide the information you need for a wonderful weekend in the National Parks.
```

## Acceptance Criteria
```
As an outdoors-inclined man or woman, I want to find campsite information quick and easy. Information that includes weather, location, amentities, whether it's by reservation or first come first serve, and information about accessibility.

When I go to the HiKamp app.
Then I am presented with a map and a search bar.

When searching or clicking into a campsite.
Then I am presented with login/registration page.

When I create an account or log in.
Then I am able to access the entire database of campgrounds via a customized Google Map.

When I click into a campsite.
Then I am presented with campsite information, contact information, reservation information, fees, and comments from other users.

When I click to leave comment.
Then I am able to type a comment up about my experience with said campsite for others to view.

When I click the favorite star.
That specific campsite is saved to my favorites and displayed on the left side of my campsite page for easy access.
```

## Features

This highly interactive app allows a user to easily search all campgrounds within the United States National Park Service in all US states and Territories. The app includes features that allows the user to view comments to specific campgrounds. It includes a variety of features such as login, logout, signup, easily save favorite campsites, not to mention a seamless and customized integration with Google Maps for easy and convenient searching. Users can search by Park Name, State Name, Zipcode and/or Campground Name.  Our customized pins are located on each National Park campground thoughout the United States and Territories on the map, and users who know which area they wish to camp in but don't know names or zipcodes of the area can also search for specific campgrounds by interacting directly with the map. 

## Technologies Used

1. Languages: Javascript, HTML, CSS
2. Views: [handlebars](https://handlebarsjs.com/), [express-handlebars](https://www.npmjs.com/package/express-handlebars), [Bootstrap](https://getbootstrap.com/), [Google Fonts](https://developers.google.com/fonts) 
3. Back-end Runtime Environment: [node.js](https://nodejs.org/en/)
4. Auto-complete Features: [jQuery v3.6.0](https://jquery.com/)

### 3rd Party Application Programming Interfaces

1. [National Park Service](developer.nps.gov/api/v1)
2. [Google Maps](https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility)

### Dependencies

1. [express.js](https://expressjs.com/) for Controller/Router 
2. [bcrypt](https://www.npmjs.com/package/bcrypt): for password security (hashing)
3. [dotenv](https://www.npmjs.com/package/dotenv): for creating secure production / back-end environments 
4. [Axios](https://www.axios.com/): to get and render 3rd Party API data
5. [phone-number-formats](https://www.npmjs.com/package/phone-number-formats): npm for formatting telephone numbers
6. Sessions/Cookies: Sequalize Store: connect-sessions-sequalize
7. [Github](https://github.com/): Project Management/Repo
8. [Text-To-Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API):built-in Javascript feature that enables incorporating voice data into web apps.

## Website Preview

### Static Screenshots

<img width="1327" alt="Screen Shot 2022-10-05 at 5 15 10 PM" src="https://user-images.githubusercontent.com/106923428/194180599-f62091b9-dfd2-4c8c-b4c9-73996da29f41.png">

<img width="1329" alt="Screen Shot 2022-10-05 at 5 16 04 PM" src="https://user-images.githubusercontent.com/106923428/194180673-1479f802-369e-4328-bf77-c2527a9c2094.png">

<img width="1337" alt="Screen Shot 2022-10-05 at 5 16 27 PM" src="https://user-images.githubusercontent.com/106923428/194180709-0294e37c-d2fb-45a0-898a-4be2b0d1fcd6.png">

<img width="500" alt="Screen Shot 2022-10-05 at 5 17 39 PM" src="https://user-images.githubusercontent.com/106923428/194180826-135bd1ff-11d6-4c01-875c-636ea7a233c5.png">

<img width="1363" alt="Screen Shot 2022-10-05 at 5 18 57 PM" src="https://user-images.githubusercontent.com/106923428/194180962-0784a12c-83d0-470a-881a-d3ed18e1433d.png">

<img width="1306" alt="Screen Shot 2022-10-05 at 5 20 58 PM" src="https://user-images.githubusercontent.com/106923428/194181158-4b57980a-c36c-45c1-bca2-c65f58a729d4.png">

### Video Preview

[Video Link](https://drive.google.com/file/d/11V0AH0rK7im93RWqo0G6RKKqAfLKrSUx/view)

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run "npm install" (to install the dependencies).

Setup the Database Schema: 
- (1) Update or add an .env file. Include the fields below in the .env file. Note that the .env variables are used in the conf folder, connection.js file.

  * DB_NAME="hiKamp_db"
  * DB_USER="<mySQL user name>"
  * DB_PASSWORD="<mySQL user password>"

Seed the Database: 
- Run Server: From the root directory, run either "npm run watch" to start nodemon or "node server.js".
- Seed Database: (a) To create the database, run "SOURCE ./db/schema.sql" in mySQL, (b) To create the database tables, from the terminal, run "npm run start" or "npm run watch", (c) To seed the database tables, run "npm run seed" or "node ./seeds/index.js".

Note that the seed will also create entries for the user table including hashed passwords. When loggin into the app these user seeds can be used as test email address. Either obtain an email address from the user table (SELECT * FROM user;) or use an option noted below:

  * email: egerok3@ifeng.com, password: "password1234"
  * email: cmcglynn8@vimeo.com, password: "password1234"

If you'd like to use NPM nodemon as/if you make changes to the code, please install nodemon as a development dependency using "npm install --save-dev nodemon" (see https://www.npmjs.com/package//nodemon). 

## Tests

No tests at this time.

## Future Enhancements

1. Incorporate trail data APIs to tie campground searches to long trails for long-distance hikers and backpackers to plan their routes with campgrounds, parking options, and water sources along the way. 
2. Expand search capabilities on Google Maps to include campgrounds of National Forests, BLM lands, State Parks, etc., according to users' requests.
3. Add weather forecasts to campsite pages
4. Increase robustness of input validation, and more flexible, approximate searches to allow typos in user inputs.
5. Offer paid subscriptions for offline use based on GPS data. 

## Collaborators

1. Alex Cleveland: [Github LINK](https://github.com/AClevel5/)
2. Patrick Ratcliff: [Github LINK](https://github.com/PatrickARatcliff)
3. Rod Bennett: [Github LINK](https://github.com/RodBennett)
4. Steve Calla: [Github LINK](https://github.com/stevecalla)

## Resources

1. GitHub Repo: <https://github.com/stevecalla/long-trails>
2. GitHub Projects: <https://github.com/users/stevecalla/projects/22>

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

