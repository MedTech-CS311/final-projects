const express = require("express");
const dbconnection = require("./db/index");
const Story = require("./models/Story");
const storiesroute = require("./routes/stories.routes");
const authorsroute = require("./routes/authors.routes");
const app = express();
const cors = require("cors");
const Author = require("./models/Author");
const port = 8000;
app.use(express.json());
app.use(cors());
dbconnection();

app.use("/", storiesroute);
app.use("/", authorsroute);

app.listen(port, () => console.log(`server listening on port ${port}!`));
