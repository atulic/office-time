import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { addTimezone } from '../actions/index';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import './TimezoneDropdown.css';

/* eslint-disable */

class TimezoneDropdown extends Component {
  constructor() {
    super();
    this.state = { currentValue: '' }; //eslint-disable-line
  }

  handleChange = newValue => this.setState({ currentValue: newValue });

  render() {
    const { currentValue } = this.state;

    return (
      <div>
        <div>
          <TimezonePicker
            placeholder="Select a timezone..."
            onChange={this.handleChange}
            value={currentValue}
            defaultValue="America/Los_Angeles"
            overflow="false"
          />
        </div>
        <Button onClick={() => this.props.addTimezone(currentValue)}>
           Add new
        </Button>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    times: state.times,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTimezone }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimezoneDropdown);
