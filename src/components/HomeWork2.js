import '../App.js';
import React, { useState } from 'react';

function HomeWork2() {
	 const [setBlack, setshowBlack] = useState(false);
  const ChangeColor = () => {
    setshowBlack(!setBlack);
  };
  return (
    <div style={{ color: setBlack ? "white" : "black" }}>
      <div className={setBlack && "body-color"} >
        <button onClick={ChangeColor}>
          {setBlack ? "Currently Showing Black" : "Currently Showing White"}
        </button>
        <div>Good evening</div>
      </div>
    </div>
  );
}

export default HomeWork2;
