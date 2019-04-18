# GeekWars
[Go to website](https://geekwarsq.herokuapp.com/)

### What ?

GeekWars is a trivia website, where coders can register and answer multi-answer quizes, quizes have different levels and points, users can compete in getting the most points and they can play at the same time and check their points on real-time, there is also a leaderboard that shows that top users, the website
is fully responsive for Desktop and Mobile, it was designed with Mobile First
design to give the best expierence possible for Mobile users.

### How to use this project locally?
1. git clone the repo with  
```
git clone https://github.com/facn5/GeekWars.git
```
2. install npm with "npm i"
3. git install, if something was missing, please install manually to your machine, nyc, tape, tape-spec, supertest, nodemon.
4.to deploy the server, simply go to the project directory and write "
npm run run
"

### Main Goals
+ [x] Login form with 2 fields - username and password
+ [x] Users only have to log in once (i.e. implement a cookie-based session on login)
+ [x] Username is visible on each page of the site after logging in
+ [x] There should be protected routes and unprotected routes that depend on the user having a cookie or not (or what level of access they have).
+ [x] Website content should be stored in a database
+ [ ] Include thorough tests on the back-end, testing pure functions and testing routes using Supertest. If you make external API calls, use Nock to mock the response for your tests.
+ [ ] Test front-end logic, we don't expect tests on the DOM.

### Stretch goals
* will be added soon

### Tools/technologies used
* Heroku - For deploying/hosting server and database.
* Tape - for testing.
* PostgreSQL - for database
* tap-spec for testing
* Supertest for testing.
* nodemon - for hosting locally.
* Node.js - backend.


### Team members
* Shadi: [Github Profile Page](https://github.com/mrfong)
* Tamer: [Github Profile Page](https://github.com/tamerNasser)
