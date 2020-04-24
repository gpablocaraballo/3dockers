'use strict'
var axios       =   require( 'axios' );

const getImage = async ( req, res ) => {
    
    let URL = process.env.PHP_URI + '/random_img.php';
	console.log('URL:',URL);
	
    axios({
        method: 'get',
        url: URL,
        responseType: 'arraybuffer'
    }).then(response => {
		
        console.log('Everything was OK!');
		
		res.type('image/jpeg');
		res.end( response.data, 'binary' );

    }).catch(err => {
		console.log('Was an error',err);
        res.status( 200 ).send( { cod: 1, msg: 'Ups... try Again!!!' } ); 
    })

}
module.exports = { 
    getImage
}
