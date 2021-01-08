import React from "react"

import quote from "../images/icons/quote.png"

const Quotes = ({quotesArray}) => {  

    return (
      <section className="quotes">
            {quotesArray.map((individualQuote) => (
              <div className="quote-box">
                <p>{individualQuote.quote}</p>
                <p className="author">{individualQuote.author}</p>
                <p className="company">{individualQuote.company}</p>
                <div className="quote-icon"><img src={quote}></img></div>
              </div>
            ))}
      </section>
    )
  }
  
  
export default Quotes