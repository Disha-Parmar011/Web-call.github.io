let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );
app.get( '/Aboutus', ( req, res ) => {
    res.sendFile( __dirname + '/Aboutus.html' );
} );

app.get( '/contact', ( req, res ) => {
    res.sendFile( __dirname + '/contact.html' );
} );
app.get( '/join', ( req, res ) => {
    res.sendFile( __dirname + '/join.html' );
} );




io.of( '/stream' ).on( 'connection', stream );

server.listen( 3000 );
