const express = require('express');
const authorRoute = require('./authors.route.js');
const bookRoute = require("./books.route.js");
const logger = require("./logger.js");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(logger);
app.use(express.static("public")); // extra to the class

// Mount the routes
app.use("/books", bookRoute);
app.use('/authors', authorRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
  });
  
app.all("*", (req, res) => {
    res.status(404).jsonp({ message: "Page not found" });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
