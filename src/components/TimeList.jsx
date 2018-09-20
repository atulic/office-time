import React from "react";
import TimeListItem from "./TimeListItem";

const TimeList = props => {
  const { times } = props;
  const timezones = times.map(time => <TimeListItem key={time.id} />);

  return <ul className="col-md-4 list-group">{timezones}</ul>;
};

export default TimeList;
