import React from 'react';
import { connect } from 'react-redux';
import TimeListItem from './TimeListItem';
import './TimeList.css';

const TimeList = props => {
  const { times } = props.times;
  console.log(props.times);
  const timezones = times.map((time, index) => (
    <TimeListItem time={time} key={index} className={'time-item'} />
  ));
  return <div className="time-container">{timezones}</div>;
};

function mapStateToProps(state) {
  return {
    times: state.times
  };
}

export default connect(mapStateToProps)(TimeList);
