import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import TimeListItem from './TimeListItem';

const TimeList = (props) => {
  const { times } = props.times || [];
  const timezones = times.map((time, index) => (
    <Col md={6}>
      <TimeListItem time={time} key={index} />
    </Col>
  ));

  return <Row>{timezones}</Row>;
};

function mapStateToProps(state) {
  return {
    times: state.times,
  };
}

export default connect(mapStateToProps)(TimeList);
