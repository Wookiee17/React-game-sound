import React, { useState,useEffect } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import './main.css';
import sapceship from "../Assets/Background.png";
// import space from "../Assets/spaces.gif";
import Buttons from './buttons';
import Panel from './panel';

// import fog1 from "../Assets/fog1.gif";
// import fog2 from "../Assets/fog2.gif";
// import astroid from "../Assets/astoid.gif";
import Timer from './timer';
import Score from './Score';


const images = [ ];
function Main() {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showElement, setShowElement] = React.useState(true);
  const [end, setEnd] = React.useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } 
        else {
             setCurrentIndex(currentIndex + 1);
        }
    }, 5000)
    setTimeout(function () {
      setShowElement(false);
    }, 2200);
    
 
}, [])
  return (
    <div className="App">
     {/* <Timer/> */}
    
      <Score/>
      <Buttons/>
     
      
      {/* {showElement ? (
          <img src={astroid} width="100%" height="100%" class="over" />
        ) : (
          <img src={images[currentIndex]} width="100%" height="100%" class="under" />
        )}{" "} */}
      <img src={sapceship} width="100%" height="100%" class="over" />
      
      
      
    </div>
  );
}

export default Main;
