const next = require('next');
const express = require('express');
const expressWinston = require('express-winston');

// import 3rd party middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


//import custom middlewares
const fileupload = require('./middlewares/file-upload');

//import libs
const logger = require('./lib/logger');

//import API Routers
const apiRouter = require('./routes');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

//Create Express application
const app = express();

//create next app
const nextApp = next({ dev: isDev });

//Get next Request handler 
const handle = nextApp.getRequestHandler();


// Prepare Next App for Server Page loading and start express server
nextApp.prepare().then(() => {

    //configure middlewares 
    app.use(bodyParser.json()); //parse request body to json
    app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded post data

    app.use(cors()); //Enables CORS 
    // app.use(morgan()); //Enables logging of request
    app.use(expressWinston.logger({
        winstonInstance: logger
    })); // Enable Http request logging


    //configure API router
    app.use('/api', apiRouter);

    //Redirect all the request that will be handled by next request handler
    app.get('*', (req, res) => {
        handle(req, res);
    });

    //Error Handler
    app.use(expressWinston.errorLogger({
        winstonInstance: logger
    }));

    // Listen to port
    app.listen(PORT, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(`Application running on http://localhost:${PORT}`);

    });
});