import React, { useState, useEffect } from 'react';
import CardFilter from './components/card/card-filter';
import { Data } from './data';

const options = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Hessen",
    value: "Hessen",
  },
  {
    label: "Brandenburg",
    value: "Brandenburg",
  }
];

function App() {
  const [select, setSelect] = useState("");
  const [data, setData] = useState(Data);

  const changeHandler = (val) => {
    setSelect(val);
  }

  useEffect(() => {
    console.log(select); 
  },[select,data]);

  return (
    <div>
      <div>
        <select onChange={(e) => changeHandler(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <CardFilter data={data} />
    </div>
  );
}

export default App;
