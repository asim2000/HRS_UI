import { useDispatch } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css'
export default function BasicDateRangePicker() {
//     const dispatch = useDispatch()
//   const changeDate = (picker) => {
//     dispatch(dateRangeActions.changeCheckIn(picker.startDate._d))
//     dispatch(dateRangeActions.changeCheckOut(picker.endDate._d))
//   }
  return (
    <DateRangePicker/>
  );
}