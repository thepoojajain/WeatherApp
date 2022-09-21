# MongoDB and Express.js REST API

A simple MongoDB and Express.js REST API that returns Weather Data of an Australian Capital City.

## How To Run

1. Set Atlas URI connection parameter in `server/config.env` for the Connection String:

```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

2. Start the Express server:

```
cd server
npm install
npm install -g nodemon
nodemon server
```

3. Start the React app:

```
cd client
npm install
npm start
```
