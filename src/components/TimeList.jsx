/* eslint-disable */

import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TimeListItem from './TimeListItem';

const TimeList = (props) => {
  const { times } = props.times; //eslint-disable-line
  const timezones = times.map(time => (
    <Col md={6}>
      <TimeListItem time={time} key={time.id} />
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
