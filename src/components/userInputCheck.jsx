import {React,useState} from 'react';


function UserInputCheck(keypad,slider,generated) {
  const [text, setText] = useState('');
  setText(`${keypad}${slider}`);
  if(text==generated)
  {
    console.log("Score11",true);
    return 10;
    
  }
 
  
}

export default UserInputCheck