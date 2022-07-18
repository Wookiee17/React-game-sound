import React,{useEffect} from 'react';


function Score() {
  const[scores,SetScores]=("")
  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem("scores");
  
      if (item) {
        SetScores(item)
      }
    }
  
    window.addEventListener('storage', scores)
    
    
  }, [])
  
  return (
    <div style={{marginLeft:"75%"}}><h1>{scores}</h1></div>
  )
}

export default Score