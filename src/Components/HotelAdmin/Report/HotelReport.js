import React, { useEffect, useState } from 'react'
import HotelService from '../../../services/hotelService'
import alertify from 'alertifyjs'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import DateRangePicker from '../../DateRangeBox/DateRangePicker'
import { useSelector } from 'react-redux'
import ReportService from '../../../services/reportService'

export default function HotelReport() {
  const [hotel, setHotel] = useState({})
  const [other, setOther] = useState({})
  const [paid,setPaid] = useState(0)
  const { hotelId } = useParams()
  const navigate = useNavigate()
  const startDate = useSelector(state=>state.reportCheckInReducer)
  const endDate = useSelector(state=>state.reportCheckOutReducer)
  useEffect(() => {
    getReportForDate()
  }, [])

  const getReportForDate = () => {
    const hotelService = new HotelService()
    hotelService.getReportOfHotel(hotelId,{
      startDate,
      endDate
    })
      .then(result => {
        setHotel(result.data.hotel)
        setOther(result.data.other)
      }).catch(error => {
        alertify.error(error.message)
      })

      const reportService = new ReportService()
      reportService.getAmountByRecipient(hotelId,{
        startDate,
        endDate
      }).then(result=>{
        if(result.data)
        setPaid(result.data)
      setPaid(0)
      }).catch(error=>{
        alertify.error(error.message)
      })
  }

  return (
    <div>
      <Row>
        <Col>
          <Button onClick={() => navigate(-1)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Back</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <DateRangePicker />
        </Col>
        <Col>
          <Button onClick={getReportForDate}>Search</Button>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col xs='4'>
          {
            hotel.reserveCount!=0 || other.reserveCount!=0
            ?
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Reserve Count</th>
                <th>Total Profit</th>
                <th>Net Profit</th>
                <th>Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Hotel</th>
                <td>{hotel.reserveCount}</td>
                <td>{hotel.totalProfit}</td>
                <td>{hotel.netProfit}</td>
              </tr>
              <tr>
                <th>Other</th>
                <td>{other.reserveCount}</td>
                <td>{other.totalProfit}</td>
                <td>{other.netProfit}</td>
                <td>{paid}</td>
              </tr>
            </tbody>
          </Table>
          :<h6>No Data</h6>
          }
        </Col>
      </Row>
    </div>

  )
}
