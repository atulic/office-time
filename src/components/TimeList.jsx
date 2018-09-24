import React from 'react';
import { connect } from 'react-redux';
import TimeListItem from './TimeListItem';
import './TimeList.css';

const TimeList = props => {
  const { times } = props.times;
  const timezones = times.map(time => (
    <div className="time-item">
      <TimeListItem time={time} key={time.id} />
    </div>
  ));
  return <div className="time-container">{timezones}</div>;
};

function mapStateToProps(state) {
  return {
    times: state.times
  };
}

export default connect(mapStateToProps)(TimeList);
