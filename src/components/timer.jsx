import React from 'react';
import "./timer.css"
import ReactTimerStopwatch from 'react-stopwatch-timer';
 
const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
 
const Timers = () => {
    return (
        <div className='container'>
         <div class="top-left">
        <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"
                             displayCricle={true} color="gray" hintColor="red" fromTime={fromTime}/>
    </div>
    </div>
   
    );
};
 
export default Timers;