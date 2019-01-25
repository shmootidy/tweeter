# Tweeter

Tweeter is a simple, single-page Twitter clone that runs on a local server. This is a student project to practice full-stack development.

## Screenshots
!['Screenshot of tweets'](https://github.com/shmootidy/tweeter/blob/master/docs/all-tweets.png?raw=true)
!['Screenshot of compose box'](https://github.com/shmootidy/tweeter/blob/master/docs/compose.png?raw=true)
!['Screenshot of error message (empty tweet)'](https://github.com/shmootidy/tweeter/blob/master/docs/error-empty.png?raw=true)
!['Screenshot of error message (too long)'](https://github.com/shmootidy/tweeter/blob/master/docs/error-too-long.png?raw=true)

## Installation
From the command line...
1. Clone the repo into a tweeter directory.
`git clone git@github.com:shmootidy/tweeter.git tweeter`
2. Install dependencies.
`npm install`
3. Start the web server.
`npm run local`
4. Open Tweeter and go!
`http://localhost:8080/`

## Features
* Time stamp is sensible and human-friendly.
* Tweets are read in reverse chronological order (newest first).
* Toggle the compose tweet input fields with a nifty button.
* All tweets saved to external database and will survive server restart.
* Handy character counter that turns red to tell you when your entry is too long.

## Dependencies
* Node 5.10.x or above
* Express
* Body Parser
* Chance
* md5
* MongoDB
* Nodemon

## Credit
The lovely developers at Lighthouse Labs built the bones of this project and helped guide me (and all the other students in my cohort) toward its successful completion.
