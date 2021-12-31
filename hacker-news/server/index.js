const express = require("express");
const dbconnection = require("./db/index");
const Story = require("./models/Story");
const storiesroute = require("./routes/stories.routes");
const authorsroute = require("./routes/authors.routes");
const app = express();

const cors = require("cors");
const Author = require("./models/Author");
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
dbconnection();

app.use("/", storiesroute);
app.use("/", authorsroute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.listen(PORT, () => console.log(`server listening on port ${PORT}!`));
