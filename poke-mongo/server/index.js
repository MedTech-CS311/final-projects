const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/api/pokemon",(req,res) => {
    res.status(200).send("Fetching...")
})

app.post("api/pokemon", (req,res) => {
    console.log(req.body)
    res.status(201).send("Creating user ...")
})

app.listen(8000, () => {
    console.log("started listening for resquests on port 8000");
})