require('dotenv').config()
const express = require('express');
const app = express();

// Localhost port
const port = '3000';

// Environment variables
const {
  client_id,
  redirect_uri,
} = process.env;

// Endpoints, scope, misc variables
const baseAuthUri = 'https://auth.buildinglink.com/connect/authorize';
const scope = encodeURIComponent('access_control_read');

// Express set-up
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));

// Application routes
app.get('/', (_req, res) => {
  res.render('index', {
    baseAuthUri,
    scope,
    redirect_uri,
    client_id,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));