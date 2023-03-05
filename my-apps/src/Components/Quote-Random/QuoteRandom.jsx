import React, { useState } from "react";

function QuoteRandom() {
  const [quotes, setQuotes] = useState({
    author: "Mahmut SABA",
    text: "Time never comes again.   (Zaman bir daha asla geri gelmez.)",
  });
  const [color, setColor] = useState("#6725ef");
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className="qt-random container mt-3 ">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ color: `${color}` }}>
            {quotes.author === null ? "Mahmut Saba" : quotes.author}
          </h4>
          <p className="card-text">{quotes.text}</p>
          <div className="qt-btn">
            <button className="qt-random-btn" onClick={getQuotes}>
              Random Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteRandom;
