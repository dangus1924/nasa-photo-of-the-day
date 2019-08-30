import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import axios from "axios"
import Heading from './Component/Heading';
import Click from './Component/Button';
import NasaCard from "./Component/NASA-api";
import Slide from "./Component/Side-Bar";


import "./App.css";

function App() {
  const [data, setData] = useState({ });  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=XFojgFKtU54kVP2yJzjDbEurB5g6cWBGde4WiPHA")    
  .then(res => {  
    setData(res.data)    
  });
  }, [])

  // const [newData, newSetData] = useState({ });
  // useEffect(() => {
  //   console.log(data)
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
  //   .then(res => {
  //     newSetData(res.data)
  //   })
  // })
  
  return (
    <div className="App">
      <Heading />
      <Slide />
      <Alert color="primary">Here you will find the latest  images that NASA has to offer</Alert>
      <Click />
      <div>
      <NasaCard title={data.title} 
              url={data.url}
              explanation={data.explanation}/>
      {/* <SideBar title={newData.title} 
              url={newData.url}
              explanation={newData.explanation}/> */}

      </div>
    </div>
  );
}

export default App;
