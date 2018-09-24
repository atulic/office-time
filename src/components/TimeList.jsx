import React from "react";
import { connect } from "react-redux";
import TimeListItem from "./TimeListItem";

const TimeList = props => {
  const { times } = props.times;
  const timezones = times.map(time => (
    <div>
      <TimeListItem time={time} key={time.id} />
    </div>
  ));
  return <div>{timezones}</div>;
};

function mapStateToProps(state) {
  return {
    times: state.times
  };
}

export default connect(mapStateToProps)(TimeList);
