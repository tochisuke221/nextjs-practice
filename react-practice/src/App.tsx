import React, { useState, useCallback, FunctionComponent } from 'react';
import './App.css';


const DisplayResult: FunctionComponent <{
  findValue: (query: string) => string;
  query: string;
}> = ({findValue, query}) => {
  return <div>{findValue(query)}</div>
}

function App() {
  const [inputValue, setInputValue] = useState<string>('default value')

  const findValue = useCallback(
    (query: string) => {
      return inputValue.indexOf(query) === -1
      ? `${query} not found`
      : `${query} found`
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
      <DisplayResult findValue={findValue} query="hoge"/>
      <DisplayResult findValue={findValue} query="fuga"/>

    </div>
  );
}

export default App;
