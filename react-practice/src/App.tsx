import React, { useState, useRef  } from 'react';
import './App.css';


function App() {
  const [inputValue, setInputValue] = useState<string>('default value')

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={()=>{
          inputRef.current?.focus();
        }}
      >
        focus
      </button>

    </div>
  );
}

export default App;
