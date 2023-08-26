import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>('default value')
  const [response, setResponse] = useState<Response | null>(null)


  useEffect(
    () => {
      const controller = new AbortController();
      fetch('api/data/list', {
        body: JSON.stringify({inputValue}),
        signal: controller.signal
      }).then( res => {
        setResponse(res)
      });

      return () => {
        controller.abort()
      }
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
    </div>
  );
}

export default App;
