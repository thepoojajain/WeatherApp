require("dotenv").config();
const seed = require("./seed");
const Weather = require("./models/weather");

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
console.log("Connecting to DB: ", mongoString);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Error connecting to the database. Error: ", error.message);
});

database.once("connected", async () => {
  console.log("Database Connected");
  if (process.env.SHOULD_SEED === "true") {
    try {
      await Weather.collection.drop();
      await seedData();
    } catch (error) {
      console.log(
        "Error while dropping an existing collection or seeding data. Trying to seed the database again. Error: ",
        error.message
      );
      await seedData();
    }
  }
});

async function seedData() {
  try {
    const weatherRecords = await seed.seedData();
    await Weather.insertMany(weatherRecords);
    console.log("DB Seeded Successfully! 🥳");
  } catch (error) {
    console.log("Error seeding the DB. 🥲 Error: ", error.message);
  }
}
