import React, { useState } from 'react';
import { YearPicker } from 'react-dropdown-date';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { OP } from './query';
import { useJsonState } from '../hooks/jsonState';

// import "react-datepicker/dist/react-datepicker.css";

function QueryYearPicker(props) {
  
  const [query, ref] = useJsonState(props.query);

  return (
    <YearPicker
      defaultValue={props.defaultValue}
      reverse
      // default is false
      required={true}
      // mandatory
      value={query.value}
      // mandatory
      onChange={(year) => {
          // this.setState({ year });
          ref().setValue(year);
          console.log(props);
          // ss({ref: props.query});
      }}
      // classes={'classes'}
      // optionClasses={'option classes'}
    />
  );
}

function DateRange(props) {

  const endYear = new Date().getFullYear();
  const startYear = endYear - 10;

  const {field, query} = {...props};

  query.setOp(OP.AND);

  const qStart = query.getQuery(0); //field, "$ge", startYear);
  const qEnd = query.getQuery(1); //field, "$le", endYear);
  qStart.setOp(OP.GE).setField(field).setValue(startYear);
  qEnd.setOp(OP.LE).setField(field).setValue(endYear);

  console.debug(props.query);

  return (
    <div>
      <Row>
        <Col sm={3}>
          <span>Date Range From: </span>
          <QueryYearPicker name='start' query={qStart} />
        </Col>
        <Col sm={2}>
          <span>To</span>
          <QueryYearPicker name='end' query={qEnd} />
        </Col>
      </Row>
    </div>
  );
}

export default DateRange;