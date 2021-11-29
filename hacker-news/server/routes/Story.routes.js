module.exports = app => {
const express = require("express");
const Story = require("../controllers/Story.controller");
const story = require("../models/Story.model");
const router = express.Router();

router.get("/", async (req, res) => {
    const Stories = await story.find()
    res.send(Stories)
});

router.post("/", Story.create);


app.use('/api/Stories', router);

}