const express = require("express");
const Weather = require("../models/weather");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Weather.find({ city: req.query.city });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
