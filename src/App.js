import React, { Component } from "react";
import "./App.css";
import TimezoneDropdown from "./components/TimezonePicker";
import TimeList from "./components/TimeList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimezoneDropdown />
        <TimeList />
      </div>
    );
  }
}

export default App;
