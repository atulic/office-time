import React, { Component } from 'react';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import { Button } from 'react-bootstrap';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

export default class TimezoneDropdown extends Component {
  constructor() {
    super();
    this.state = { currentValue: '', absolute: false };
  }

  handleChange = newValue => this.setState({ currentValue: newValue });

  render() {
    const { currentValue, absolute } = this.state;
    return (
      <div>
        <TimezonePicker
          placeholder="Select timezone..."
          onChange={this.handleChange}
          absolute={absolute}
          value={currentValue}
        />
        <Button>Add</Button>
      </div>
    );
  }
}
