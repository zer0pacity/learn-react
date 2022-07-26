import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  )
}

export default App;
