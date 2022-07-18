import {React, useState} from 'react'
import Main from './components/main';
import "./App.css";
import Modal from "./components/modal";
import useModal from './components/useModal';
import "./style.css"
import backgr from "./Assets/background.jpg"
import appConfig from "./config";



function App() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState();
  const[disable,setDisable]=useState(true);
  const {isShowing, toggle} = useModal();
  var date;
  function assign(a){
    setCode( code );
    date=new Date();
    let result = a.concat("_", date);
    localStorage.setItem("code",result)
    console.log("code",localStorage.getItem("code"))
    setDisable(false);
  }
  return (
    <div className='body'>
      
      {localStorage.removeItem("Scores")}
      {!show  && <div style={{marginLeft:"5%"}}>
      
    <input type="text"  placeholder="Select an Username" size="20"   onChange={(e) => {assign(e.target.value)} }/>
     
    <button onClick={() => setShow(show => !show)} disabled={disable} class="button-29" role="button">Play</button>
    
    {console.log("yyyy",localStorage.getItem("code"))}
    <button className="button-default" onClick={toggle}>Instruction</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      </div>
      
            }


      {show && <Main/>}
    

    </div>
  )
}

export default App