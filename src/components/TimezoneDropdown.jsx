import React, { Component } from "react";
import { connect } from "react-redux";
import { addTimezone } from "../actions/index";
import TimezonePicker from "react-bootstrap-timezone-picker";
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import "react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css";

class TimezoneDropdown extends Component {
  constructor() {
    super();
    this.state = { currentValue: "", times: [] };
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
        <Button onClick={() => this.props.addTimezone(currentValue)}>
          {" "}
          Add new Timezone
        </Button>
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
  return bindActionCreators({ addTimezone: addTimezone }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimezoneDropdown);
