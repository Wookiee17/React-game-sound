import React, { Fragment, useEffect, useState, useCallback } from "react";
import "./randomMessage.css"
import appConfig from "../config";

const data = [
  { id: 1, author: "Change TO  Charlie", quote: "Move TO 01" },
  { id: 4, author: "Change TO  Delta", quote: "Move TO 02" },
  { id: 3, author: "Change TO  Echo", quote: "Move TO 03" },
  { id: 5, author: "Change TO  Foxtrot", quote: "Move TO 04" },
  { id: 2, author: "Change TO  Juliett", quote: "Move TO 05" },
  { id: 6, author: "Change TO   Echo", quote: "Move TO 06" },
  { id: 7, author: "Change TO Juliett", quote: "Move TO 07" },
  { id: 8, author: "Change TO Juliett", quote: "Move TO 08" },
  { id: 9, author: "Change TO Juliett", quote: "Move TO 09" },
  { id: 10, author: "Change TO Juliett", quote: "Move TO 10" },
  { id: 11, author: "Change TO Charlie", quote: "Move TO 11" },
  { id: 14, author: "Change TO Delta", quote: "Move TO 12" },
  { id: 13, author: "Change TO Echo", quote: "Move TO 13" },
  { id: 15, author: "Change TO Foxtrot", quote: "Move TO 14" },
  { id: 12, author: "Change TO Juliett", quote: "Move TO 15" },
  { id: 16, author: "Change TO Echo", quote: "Move TO 16" },
  { id: 17, author: "Change TO Juliett", quote: "Move TO 17" },
  { id: 18, author: "Change TO Juliett", quote: "Move TO 18" },
  { id: 19, author: "Change TO Echo", quote: "Move TO 19" },
  { id: 20, author: "Change TO Juliett", quote: "Move TO 20" },
  { id: 21, author: "Change TO Charlie", quote: "Move TO 21" },
  { id: 24, author: "Change TO Delta", quote: "Move TO 22" },
  { id: 23, author: "Change TO Echo", quote: "Move TO 23" },
  { id: 25, author: "Change TO Foxtrot", quote: "Move TO 24" },
  { id: 22, author: "Change TO Juliett", quote: "Move TO 25" },

  
  
];

const getRandIndex = arr => Math.floor(Math.random() * arr.length);

const RandomQuote = ({ data, interval = 3000 }) => {
  const [quotes, setQuotes] = useState(data);
  const [currentQuote, setCurrentQuote] = useState();
  
  /**
   * Select a quote at random and remove from the current list of
   * selectable quotes, reducing the array length by 1
   */
  const getRandomQuote = useCallback(() => {
    
    const randIndex = getRandIndex(quotes);
    setCurrentQuote(quotes[randIndex]);
    setQuotes(quotes => quotes.filter((_, i) => i !== randIndex));
  }, [quotes]);

  // Get initial random quote and setup interval and cleanup function
  useEffect(() => {
    !currentQuote && getRandomQuote();
    const timer = quotes.length && setInterval(getRandomQuote, interval);
    return () => clearInterval(timer);
  }, [currentQuote, getRandomQuote, interval, quotes]);

  return (
    <main>
      <div className="wrapper">
        <div className="feature">
          {currentQuote && (
            <Fragment>
              <div className="quote-wrapper">
                <h1 className="quote">"{currentQuote.quote}"</h1>
              </div>
              
              {console.log(currentQuote.quote)}
              <div className="author-wrapper">
                <span className="author">- {currentQuote.author}</span>
                {console.log(".author",currentQuote.author)}
                
              </div>
              
            </Fragment>
          )}
        </div>
      </div>
    </main>
  );
};

export default function RandomMessage() {
  
  return (
    <div className="App">
     

      <RandomQuote data={data} />
    </div>
  );
}
