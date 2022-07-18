const appConfig={
    ButtonDisable:"true", 
    //disable button after round Keypad only
    feedbackTextRight:'Corect Answer',
    //Text shown to user for correct answer
    feedbackTextWrong:'Wrong Answer',
    //Text shown to user for incorrect answer
    showAnswer:true,
    //Show answer to user for incorrect answer
    durationBetweenRound : '1500', 
    //Duration Between folder change for speed voice/instruction
    
    audioPlayAfter: '5000',
    //audio will play after defined sec when game starts
    videoUrl : 'https://www.youtube.com/embed/GjtrBwrX2ZA?controls=0?autoplay=1', 
    //instruction video Url currently hardcoded
    mute: "&mute=1",
    //mute video 1=Yes 0=No
    
    Trials:'2', 
    //Total rounds in same speed
    url:'https://omc0dwxiy7.execute-api.ap-south-1.amazonaws.com',
   
    opts : {           
    //video options
        height: '490',
        //height of video player for instruction
        width: '490',
        //width of video player for instruction
       
      }
      
};
export default appConfig;

