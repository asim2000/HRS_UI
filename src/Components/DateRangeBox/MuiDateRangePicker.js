import React from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import * as dateRangeActions from '../../redux/actions/dateRangeAction'

export default function MuiDateRangePicker() {
  const dispatch = useDispatch()
  const changeDate = (picker) => {
    console.log(picker)
    console.log(picker.startDate._d.getDate()+'/'+picker.startDate._d.getMonth()+'/'+picker.startDate._d.getFullYear())
    dispatch(dateRangeActions.changeCheckIn(picker.startDate._d.getDate()))
    dispatch(dateRangeActions.changeCheckOut(picker.endDate._d.getDate()))
  }
  return (
    <div>
      <DateRangePicker onApply={(event,picker)=>changeDate(picker)} onCancel={()=>document.getElementById('dateRange').value=''}>
        <input type='text' style={{textAlign:'center'}} value='' id='dateRange' className='form-control' placeholder='Checkin - Checkout'/>
      </DateRangePicker>
    </div>
  )
}
