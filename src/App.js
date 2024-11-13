import { useState } from "react";

function App() {
  var [values, setValues] = useState(0);
  var [history, setHistory] = useState([]);
  var [numinput, setNumInput] = useState("");

  // Handle the input change
  function numinitiate(event) {
    setNumInput(event.target.value);
  }

  // Increment the value and add to history
  function addnow() {
    const newValue = values + 1;
    setValues(newValue);
    setHistory([...history, `${newValue}`]);
  }

  // Decrement the value and add to history
  function subnow() {
    const newValue = values - 1;
    setValues(newValue);
    setHistory([...history, `${newValue}`]);
  }

  // Reset to 0 and clear history
  function resetnow() {
    setValues(0);
    setHistory([]);
  }

  // Set value based on input and add to history
  function startnum() {
    const parsedValue = Number(numinput);
    if (!isNaN(parsedValue)) {
      setValues(parsedValue);
      setHistory([...history, `${parsedValue}`]);
    }
  }

  return (
    <div className="mainBox">
      <section className="appBox">
        <h2>Controls</h2>
        <h1>{values}</h1>
        <div>
          <button id="addbtn" onClick={addnow}>Increment (+)</button>
          <button id="subbtn" onClick={subnow}>Decrement (-)</button>
          <br />
          <input
            onChange={numinitiate}
            value={numinput}
            type="number"
            placeholder="Enter the start value"
          /> <br />
          <button id="setbtn" onClick={startnum}>Set</button>
          <button id="resetbtn"  onClick={resetnow}>Reset</button>
        </div>
      </section>
      <section className="historyBox">
        <h2 className="logheading">React Counter App</h2>
        <div className="log">
        <p>{history.join(", ")}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
