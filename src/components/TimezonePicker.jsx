import { TimezonePicker, TimezoneDisplayFormat } from '@blueprintjs/timezone';
import React, { Component } from 'react';
import { Button, Divider, ButtonGroup } from '@blueprintjs/core';
import { addTimezone } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TimezonePicker.css';

class TimezoneDropdown extends Component {
  state = { timezone: '', times: [] };

  handleTimezoneChange = timezone => this.setState({ timezone });

  render() {
    const { times } = this.props.times;
    const { addTimezone } = this.props;
    const { timezone } = this.state;

    return (
      <div>
        <ButtonGroup className={'timezone-heading'} vertical={false}>
          <TimezonePicker
            value={timezone}
            onChange={this.handleTimezoneChange}
            valueDisplayFormat={TimezoneDisplayFormat.COMPOSITE}
          />
          <Divider />
          <Button
            text="Add New"
            onClick={() => addTimezone(timezone)}
            disabled={!!(timezone === '' || times.includes(timezone))}
          />
        </ButtonGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    times: state.times
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTimezone }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimezoneDropdown);
