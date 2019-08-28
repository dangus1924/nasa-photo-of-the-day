import React from 'react';

function Heading(props) {
    console.log(props);
    return( 
    <div>
    <h1>Welcome to NASA Image Gallery</h1>
    <img src="https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_960.jpg"/>
    </div>)
}

export default Heading;