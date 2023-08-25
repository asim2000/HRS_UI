import React, { useEffect } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import * as dateRangeActions from '../../redux/actions/dateRangeAction'
export default function BootstrapDateRangePicker() {
  const dispatch = useDispatch()
  const checkIn = useSelector(state=>state.checkInReducer)
  const checkOut = useSelector(state=>state.checkOutReducer)
  const changeDate = (picker) => {
    picker.startDate._d.setDate(picker.startDate._d.getDate()+1)
    dispatch(dateRangeActions.changeCheckIn(picker.startDate._d))
    dispatch(dateRangeActions.changeCheckOut(picker.endDate._d))
  }       
  return (
    <div>
      <DateRangePicker initialSettings={{ startDate: checkIn, endDate: checkOut }} onApply={(event,picker)=>changeDate(picker)}>
        <input type='text' style={{textAlign:'center'}} id='dateRange' className='form-control' placeholder='Checkin - Checkout'/>
      </DateRangePicker>
    </div>
  )
}
