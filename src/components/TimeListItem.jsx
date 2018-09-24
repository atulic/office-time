import 'moment-timezone';
import Moment from 'react-moment';
import React, { Component } from 'react';
import moment from 'moment-timezone';
import { Card, Elevation, Icon } from '@blueprintjs/core';
import { removeTimezone } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TimeListItem.css';

const formatCityName = time => {
  return time
    .split('/')
    .pop()
    .replace('_', ' ');
};

const isBusinessHours = time => {
  const startTime = moment.tz('8:00:00', 'HH:mm:ss', time);
  const finishTime = moment.tz('17:00:00', 'HH:mm:ss', time);
  return moment.tz(time).isBetween(startTime, finishTime);
};

const format = 'ddd, h:mm a';

class TimeListItem extends Component {
  render() {
    const { time, className } = this.props;
    const city = formatCityName(time);
    const working = isBusinessHours(time);

    return (
      <Card
        interactive={false}
        elevation={Elevation.TWO}
        className={`${className} ${working ? '' : 'bp3-dark'}`}
      >
        <Icon
          icon="cross"
          onClick={() => this.props.removeTimezone(time)}
          className="close-icon"
        />
        <h5>Current time in {city} is:</h5>
        <Moment tz={time} format={format} />
        <p />
        <p>{`${city} ${working ? 'is' : 'is not'} in the office`}</p>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeTimezone }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(TimeListItem);
