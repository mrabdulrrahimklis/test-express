const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// routes
const contact = require('./routes/contact');

const InitialMongoServer = require('./config/db');

InitialMongoServer();

// Middleware
app.use(bodyParser.json());

app.use("/api", contact);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
