'use strict'
var express     = require( 'express'     );
var bodyParser  = require( 'body-parser' );
var app         = express();
var route_images = require('./routes/images');

app.use( bodyParser.urlencoded( { extended:false } ) );
app.use( bodyParser.json() );

// Config HTTP Headers
app.use( ( req, res, next ) => {
    res.header( 'Access-Control-Allow-Origin' , '*' );
    res.header( 'Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method' );
    res.header( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS' );
    res.header( 'Allow', 'GET, POST, PUT, DELETE, OPTIONS' );
    next();
} );

app.use('/api/v1/images', route_images);
module.exports = app;