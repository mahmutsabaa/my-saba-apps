import React, { useState } from "react";

function ColorRandom() {
  const [color, setColor] = useState("#6725ef");

  function RandomColors() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }
  return (
    <div
      className="color-random container"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="color-random-2">
        <h1>{color}</h1>
        <div className="color-random-3">
          <button className="qt-random-btn" onClick={RandomColors}>
            Random Background
          </button>
          <button
            className="qt-random-btn"
            onClick={navigator.clipboard.writeText(color)}
          >
            Copy Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorRandom;
