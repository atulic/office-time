import 'moment-timezone';
import Moment from 'react-moment';
import React from 'react';
import moment from 'moment-timezone';
import { Card, Elevation } from '@blueprintjs/core';

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

function TimeListItem({ time }) {
  var city = formatCityName(time);
  var working = isBusinessHours(time);

  return (
    <Card
      interactive={false}
      elevation={Elevation.TWO}
      className={working ? '' : 'bp3-dark'}
    >
      <h5>Current time in {city} is:</h5>
      <Moment tz={time} format={format} />
      <p />
      <p>{`${city} ${working ? 'is' : 'is not'} in the office`}</p>
    </Card>
  );
}

export default TimeListItem;
