const express = require("express");
const cors = require("cors");
require("dotenv").config();
const con = require("../connection");
const project = require("../middlewares");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", project.getProjectData(con));

app.listen(process.env.PORT, () => {
    console.log("currently Im listening on port 5000");
});
