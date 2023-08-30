import React, { useState } from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeReportCheckIn, changeReportCheckOut } from '../../redux/actions/dateRangeAction';

const DateRangePicker = () => {
  const startDate = useSelector(state=>state.reportCheckInReducer)
  const endDate = useSelector(state=>state.reportCheckOutReducer)
  const dispatch = useDispatch()

  return (
    <div>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label style={{marginRight:'10px'}}>Start Date</Label>
            <DatePicker
              selected={startDate}
              onChange={date => dispatch(changeReportCheckIn(date))}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              startDate={startDate}
              endDate={endDate}
              selectsStart
              className="form-control"
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label style={{marginRight:'10px'}}>End Date</Label>
            <DatePicker
              selected={endDate}
              onChange={date => dispatch(changeReportCheckOut(date))}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              selectsEnd
              className="form-control"
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default DateRangePicker;
