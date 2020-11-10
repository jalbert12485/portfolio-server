// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
const express = require("express");
const path=require("path");
const fs=require("fs");


// Static directory to be served
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Routes
// =============================================================
require("./routes/html-routes.js")(app);


// Here we introduce HTML routing to serve different HTML files
// require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
  });
  