import 'moment-timezone';
import './TimeListItem.css';
import Moment from 'react-moment';
import React from 'react';

const TimeListItem = ({ time }) => (
  <Moment interval={1000} tz={time} format="dddd, h:mm:ss a" />
);

export default TimeListItem;
