import React, { useState, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>('default value')

  const reversedValue = useMemo(
    () => {
      console.log("再計算")
      return inputValue.split('').reverse().join('');
    },
    [inputValue]
  )

  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <div>{reversedValue}</div>
    </div>
  );
}

export default App;
