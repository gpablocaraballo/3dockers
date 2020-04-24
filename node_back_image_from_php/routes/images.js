'use strict'
var express          = require( 'express'             );
var controller_image = require( '../controllers/images' );
var api              = express.Router();
api.get ( '/randomimage', controller_image.getImage );
module.exports = api;