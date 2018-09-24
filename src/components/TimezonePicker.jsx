import { TimezonePicker } from "@blueprintjs/timezone";
import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
import { addTimezone } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class TimezoneDropdown extends Component {
  state = { timezone: "" };

  render() {
    return (
      <div>
        <TimezonePicker
          value={this.state.timezone}
          onChange={this.handleTimezoneChange}
        />
        <Button
          text="Add New"
          onClick={() => this.props.addTimezone(this.state.timezone)}
        />
      </div>
    );
  }

  handleTimezoneChange = timezone => this.setState({ timezone });
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