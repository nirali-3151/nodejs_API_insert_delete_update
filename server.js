const express = require('express');
const routes = require('./app/routes/routes');
// const conn = require('./app/models/dbConnection')

const app = express();
var cors = require("cors");

const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use(routes);


// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(port,() => console.log('Server is running on port 8080'));