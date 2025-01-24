import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Basic React App</h1>
        <p>This is a simple React.js application!</p>
        <button onClick={() => alert('Button Clicked!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
