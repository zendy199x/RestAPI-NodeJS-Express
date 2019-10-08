const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Nodemon API");
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
