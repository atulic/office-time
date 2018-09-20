import React from "react";
import "./App.css";
import TimezoneDropdown from "./components/TimezoneDropdown";
import TimeList from "./components/TimeList";

const App = () => (
  <div className="App">
    <TimezoneDropdown />
    <TimeList times={[]} />
  </div>
);

export default App;
