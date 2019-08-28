import React from 'react';
import axios from "axios";


function NasaCard(props) {
   
return(
    <div>
        <h2>{props.title}</h2>
        <img src={props.url} />
        <p>{props.explanation}</p>
    </div>
)
}

export default NasaCard;