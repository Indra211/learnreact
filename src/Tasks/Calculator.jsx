import React, { useState } from "react";
import "./calcStyles.css";

const Keypad = ({
  handleClick,
  handleCalculate,
  handleClear,
  square,
  sqrt,
  remove,
}) => {
  return (
    <div className="keypad-container">
      <div className="row-buttons">
        <button onClick={() => handleClick(".")} className="digit">
          .
        </button>
        <button className="fun-key" onClick={square}>
          x<sup>2</sup>
        </button>
        <button onClick={sqrt} className="fun-key">
          &radic;x
        </button>
        <button onClick={remove} className="operator">
          ⬅️
        </button>
      </div>
      <div className="row-buttons">
        <button onClick={() => handleClick("7")} className="digit">
          7
        </button>
        <button onClick={() => handleClick("8")} className="digit">
          8
        </button>
        <button onClick={() => handleClick("9")} className="digit">
          9
        </button>
        <button onClick={() => handleClick("/")} className="operator">
          /
        </button>
      </div>
      <div className="row-buttons">
        <button onClick={() => handleClick("4")} className="digit">
          4
        </button>
        <button onClick={() => handleClick("5")} className="digit">
          5
        </button>
        <button onClick={() => handleClick("6")} className="digit">
          6
        </button>
        <button onClick={() => handleClick("*")} className="operator">
          *
        </button>
      </div>
      <div className="row-buttons">
        <button onClick={() => handleClick("1")} className="digit">
          1
        </button>
        <button onClick={() => handleClick("2")} className="digit">
          2
        </button>
        <button onClick={() => handleClick("3")} className="digit">
          3
        </button>
        <button onClick={() => handleClick("-")} className="operator">
          -
        </button>
      </div>
      <div className="row-buttons">
        <button onClick={() => handleClick("0")} className="digit">
          0
        </button>
        <button onClick={handleCalculate} className="fun-key">
          =
        </button>
        <button onClick={handleClear} className="fun-key">
          C
        </button>
        <button onClick={() => handleClick("+")} className="operator">
          +
        </button>
      </div>
    </div>
  );
};

export const Calaculator = () => {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleCalculate = () => {
    setInput(eval(input));
  };
  const handleRemoveLastElement = () => {
    setInput(input.slice(0, -1));
  };
  const handleSquare = () => {
    setInput(Math.pow(parseInt(input), 2));
  };
  const handleSquareRoot = () => {
    setInput(Math.sqrt(parseInt(input)));
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", alignSelf: "center" }}>
        Claculator App Using React
      </h1>
      <div className="calculator">
        <input type="tex" className="output" value={input} />
        <Keypad
          handleClick={handleClick}
          handleCalculate={handleCalculate}
          handleClear={handleClear}
          square={handleSquare}
          sqrt={handleSquareRoot}
          remove={handleRemoveLastElement}
        />
      </div>
    </div>
  );
};
