import React, { useState, useEffect } from "react";
import axios from "axios"
import Heading from './Component/Heading';
import Button from './Component/Button';
import NasaCard from "./Component/NASA-api"
import "./App.css";

function App() {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then{res => {
    console.log(res)
  }}
  return (
    <div className="App">
      <Heading />
      <p>Here you will find the latest  images that NASA has to offer</p>
      <Button />
      <div>
      <NasaCard title="props title" 
              url="this is not a url"
              explanation="this will be some explanation"/>
      </div>
    </div>
  );
}

export default App;
