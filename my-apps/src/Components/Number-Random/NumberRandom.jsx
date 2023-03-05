import React, { useState } from "react";

function NumberRandom() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [random, setRandom] = useState(0);
  const randomfunc = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min));
  };
  return (
    <div className="number-random container d-flex justify-content-center align-items-center">
      <div className="container-2  ">
        <div className="rndm">
          <h3>
            Random Number<h1> {random}</h1>
          </h3>
        </div>

        <div className="inpt ">
          <h5>Min</h5>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(+e.target.value)}
            min="0"
          />

          <h5>Max</h5>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(+e.target.value)}
            min="0"
          />
        </div>
        <div>
          <button onClick={randomfunc} className="number-btn">Get Random Number</button>
        </div>
      </div>
    </div>
  );
}

export default NumberRandom;
