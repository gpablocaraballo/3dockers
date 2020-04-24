'use strict'
var app      = require( './app' );
var port     = process.env.PORT || 3000
app.listen( port, () => console.log( `API Node listening on port ${port}` ) );
