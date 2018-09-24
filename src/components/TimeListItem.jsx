import "moment-timezone";
import Moment from "react-moment";
import React from "react";

const formatCityName = time => {
  return time
    .split("/")
    .pop()
    .replace("_", " ");
};

const TimeListItem = ({ time }) => (
  <div>
    <h4>Current time in {formatCityName(time)} is: </h4>
    <Moment interval={1000} tz={time} format="dddd, h:mm:ss a" />
  </div>
);

export default TimeListItem;
