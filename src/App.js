import React, { useState, useEffect } from "react";
import axios from "axios"
import Heading from './Component/Heading';
import Button from './Component/Button';
import NasaCard from "./Component/NASA-api"
import "./App.css";

function App() {
  const [data, setData] = useState({ });
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => {
    console.log(res.data)
    setData(res.data)    
  });
  }, [])
  
  return (
    <div className="App">
      <Heading />
      <p>Here you will find the latest  images that NASA has to offer</p>
      <Button />
      <div>
      <NasaCard title={data.title} 
              url={data.url}
              explanation={data.explanation}/>
      </div>
    </div>
  );
}

export default App;
