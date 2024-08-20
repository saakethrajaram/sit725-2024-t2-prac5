const express = require("express");
const path = require("path");
const homeController = require('./controllers/homeController');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the homeController's loadHomePage function for the home route
app.get('/', homeController.loadHomePage);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App listening on port: " + port);
});
