import './App.css';
import { Grid } from 'react-bootstrap';
import React from 'react';
import TimeList from './components/TimeList';
import TimezoneDropdown from './components/TimezoneDropdown';

const App = () => (
  <Grid className="App">
    <TimezoneDropdown />
    <TimeList />
  </Grid>
);

export default App;
