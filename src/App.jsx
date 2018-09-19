import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimezoneDropdown from './components/TimezoneDropdown';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <TimezoneDropdown />
  </div>
);

export default App;
