# 3-Guys-Pizza-n-Pies  ![Github license](https://img.shields.io/badge/license-MIT-green.svg)

The aim of this project was to work in as a team and create a full-stack application that works with real-world data to solve a real-world challenge.

## Table of Contents
[Technologies Used](#technologies-used) <br>
[Installation](#installation) <br>
[Usage](#use) <br>
[Testing](#tests) <br>
[Media](#media) <br>
[Contact and Questions](#questions) <br>
[License](#license) <br>
[User Story](#user-story) <br>
[Acceptance Criteria](#acceptance-criteria) <br>
  

## Technologies Used
* javascript
* html
* css
* bootstrap
* express
* express handlebars
* mysql2
* sequelize
* dotenv
* bcrypt
* express session
* connect session sequelize
* loadingbar.js

with a focus on full stack development following the MVC paradigm

## Installation
Navigate to the root directory in the terminal and initialize the project with **npm install** to install all the proper node module dependencies.

Update the **.envExample** file to include your own username and password for mysql and then change the file name to be **.env**

Navigate to the root directory in the terminal and log into mysql with **mysql -u &lt;user> -p** and enter your mysql password.

Initialize the database in mysql using the following commands
* **source db/schema.sql**

Quit out of mysql and return to the root directory of this project. type in the command **npm run seed** to populate the database

## Use
Navigate to the root directory in the terminal and type **npm start** to run the project

Navigate to http://localhost:3001/ in your browser

## Tests
There are no formal tests for this project

## Media
[Link to the demo video](https://youtu.be/2oOYPbXrknI)

The following link is to this project's github repository
https://github.com/ericbwebdev86/3-guys-pizza-n-pies

The following link is to this project's live website
[Link to Heroku site](https://agile-bastion-05286.herokuapp.com/)

## Questions
Any questions feel free to contact us via our githubs or by sending any of us an email. <br/>
### Eric
* Email: ericbwebdev86@gmail.com   
* Github: https://github.com/ericbwebdev86
### Matt
* Email: mattkolbach@yahoo.com
* Github: https://github.com/MattKolbach
### Preston
* Email: fassbenderp0551@gmail.com
* Github:  https://github.com/p-fassbender

## License
MIT license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## USER STORY
AS A restaurant owner
I WANT a website that has an attention grabbing homepage, a menu that shows every item we have to offer, a way for a customer to create an account and log in with their own credentials, a way for the customer to place an order, and a place for the customer to leave a review
SO THAT my restaurant can stay competetive with other restaurants in this modern age

## ACCEPTANCE CRITERIA
* WHEN I visit the site for the first time
THEN I am presented with the homepage which includes navigation links for the homepage and the menu, and the option to log in
* WHEN I click on the logo
THEN I am taken to the homepage
* WHEN I choose to sign up
THEN I am prompted to create an account by providing personal information such as email, password, name, address.
* WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my email and password
* WHEN I am signed in to the site
THEN I see navigation links for the homepage, the menu, and the option to log out
* WHEN I click on the menu option
THEN I am presented with different categories for what food is offered
* WHEN I select on of the menu choices
THEN I am taken to a page with every item in that category
* WHEN I am not logged in on the menu pages
THEN I cannot click to order any of the items
* WHEN I am logged in on the menu pages
THEN I am able to select items to be added to my order
* WHEN I select to review my order 
THEN I am presented with a page listing the food items I want to order
* WHEN I click through the order process
THEN there is a progress bar that fills up each step of the way
