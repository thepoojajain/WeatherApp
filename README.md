## The UI

I chose to build the frontend of this Weather App in ReactJS because React is light-weight, fast, and easy to build on top of.

The UI was inspired from the UI of [MSN Weather](https://www.msn.com/en-au/weather/forecast), and [this Dribbble Shot](https://dribbble.com/shots/18070219-Cuacane-Dashboard/attachments/13260855?mode=media)

I've tried to keep it minimal and simple. As Leonardo da Vinci once said: "Simplicity is the ultimate sophistication", when working with interfaces I usually try to adhere to this quote.

I've used Bootstrap for styling. The UI is responsive till the lowest standard breakpoint.

I've tried to follow Single Responsibility Principal while creating components. That way, each component can do just one specific thing and it's also easier to unit test the component this way.

Function Components used as that's what the whole React Ecosystem has moved towards.

## The Backend

Since this was a full stack project for JavaScript, I figured I'll create the backend in NodeJS using Express. Express integrates very well with NodeJS and has a lot of resources online. I also was comfortable with JavaScript so I went ahead with using Express and NodeJS for the Backend.

I've used Express Middlewares like CORS and Express JSON. Backend routing is taken care of by Express Router.

## The Database

MongoDB is a flexible database that works seamlessly with the Express and React ecosystem. There are also a lot of resources online that I could follow to create the Application on the MERN Stack. So MongoDB was the obvious choice for the database.

For schema, data validation and also for easier interaction with MongoDB, I used Mongoose.

I also wanted the data to be latest and to avoid having to populate the data on the database manually, I also wrote some logic to seed the database.

## To run the App

### To start the frontend:

Navigate to the `client` folder and then run `npm start` on the terminal. The frontend Application will start and you can navigate to `localhost:3000` to access it.

### To run unit tests on the frontend:

Run `npm test`

### To start the backend server:

Navigate to the `server` folder and then run `npm start` on the terminal. This will spin up the express server on the `PORT` specified in the `.env` file.

## Links:


Thank you for taking the time! 🙂
