import { CSVLink, CSVDownload } from "react-csv";
import React from 'react';
import './csv.css'

function csv(generated) {
 
  var userInput=[],generatedData=[],userkey,answer=[],time=[];
  let name=localStorage.getItem("code");
  let val1=generated.value1;
  let val2=generated.value2;
  let val3=generated.value3;
  let val4=generated.value4;
  let rem1=val1.splice(1,1);
  let rem2=val2.splice(1,1);
  let rem3=val3.splice(1,1);
  let rem4=val4.splice(1,1)
  {console.log("csvgenetared",rem1)}
{console.log("csvuser",rem2)}
{console.log("csvgenetared",rem3)}
{console.log("csvuser",rem4)}
{console.log("csvresult",localStorage.getItem("code"))}
console.log("uuu",userInput)
  var info=[
    userInput=val1,
   generatedData=val2,
   answer=val3,
   time=val4,
   userkey=[localStorage.getItem("code")],

   
  ]



  
  return (
    <div>
      {console.log("info",info)}
      


       <CSVLink  data={info} filename={name+".csv"}><button class="button-33" role="button"><span>Download CSV</span></button></CSVLink>
       



    </div>
  )
}

export default csv
