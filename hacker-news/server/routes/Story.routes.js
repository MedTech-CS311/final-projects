module.exports = app => {
const express = require("express");
const Story = require("../controllers/Story.controller");
const story = require("../models/Story.model");
const router = express.Router();

router.get("/", Story.getStories);

router.get("/top10", Story.findTopTen);

router.post("/Story", Story.create);

router.post("/hack",Story.fill)


app.use('/api/Stories', router);

}