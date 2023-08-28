import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Input, InputGroup, Row, Table } from 'reactstrap'
import { AiFillEdit, AiOutlineArrowLeft } from 'react-icons/ai'
import {BsCashCoin} from 'react-icons/bs'
import { GiCancel } from 'react-icons/gi'
import BookingService from '../../../services/bookingService'
import alertify from 'alertifyjs'
import filterTable from '../../../assets/js/filter'
import ModalForPayment from './ModalForPayment'
export default function HotelAdminBookHistory(props) {
  const navigate = useNavigate()
  const [bookings, setBookings] = useState([])
  const { hotelId } = useParams()
  const [bookingId, setBookingId] = useState()
  const [showModal, setShowModal] = useState(false)
  const [fullname, setFullname] = useState()
  useEffect(() => {
    const bookingService = new BookingService()
    bookingService.getAllBookingsByHotelId(hotelId)
      .then(result => {
          setBookings(result.data)
      }).catch(error => {
        alertify.error(error.message)
      })
  }, [showModal])

  return (
    <div>
      <Row>
        <Col>
          <Button onClick={() => navigate(-1)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Home</Button>
        </Col>
        <Col>
          <Button className='d-flex ms-auto' color='primary' onClick={() => navigate('/')}>New Book</Button>
        </Col>
      </Row>
      <Row className='mt-3 mb-5'>
        <Col>
          <Button>All</Button>&nbsp;
          <Button>Confirmed</Button>&nbsp;
          <Button>Pending payment</Button>&nbsp;
        </Col>
        <Col>
          <InputGroup className='d-flex ms-auto' style={{ width: "350px" }}>
            <Input type='text' id='hotelBookingsSearchInput' onKeyUp={() => filterTable('hotelBookingsSearchInput', 'hotelBookingsTable')} className='d-flex ms-auto' />
            <Button>Search booking</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          {
           
            bookings.length === 0
              ? <h5>No Booking</h5>
              : 
              <Table id='hotelBookingsTable'>
                <thead>
                  <tr>
                    <th>Ordered</th>
                    <th>Orderer</th>
                    <th>Reservation Number</th>
                    <th>Room Number</th>
                    <th>Booking Status</th>
                    <th>Check-In/Check-Out</th>
                    <th>Price Per Night</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Debt</th>
                    <th>Booking Date</th>
                    <th style={{width:'100px'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  bookings.length!=0 && bookings.map(booking => 
                     (
                      <tr key={booking.id}>
                        <td>{booking.ordered.name + ' ' + booking.ordered.surname}</td>
                        <td>{booking.orderer.name + ' ' + booking.orderer.surname}</td>
                        <td>{booking.reservationNumber}</td>
                        <td>{booking.room.roomNumber}</td>
                        <td>{booking.bookingStatus}</td>
                        <td>{booking.checkIn} / {booking.checkOut}<br /><i style={{ color: 'red' }}>{(new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) / (1000 * 3600 * 24) + 1} days</i></td>
                        <td>{booking.pricePerNight} AZN</td>
                        <td>{booking.pricePerNight * ((new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) / (1000 * 3600 * 24) + 1)} AZN</td>
                        <td>{booking.payments.map(payment => payment.amount).reduce((partialSum, a) => partialSum + a, 0)} AZN</td>
                        <td>{booking.pricePerNight * ((new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) / (1000 * 3600 * 24) + 1) - booking.payments.map(payment => payment.amount).reduce((partialSum, a) => partialSum + a, 0)}</td>
                        <td>{booking.createdDate.split('T')[0]}<br />{booking.createdDate.split('T')[1]}</td>
                        <td>
                          <BsCashCoin title='add payment' color='green' onClick={()=>{
                            setBookingId(booking.id)
                            setFullname(booking.orderer.name + ' ' + booking.orderer.surname)
                            setShowModal(true)
                            console.log(booking.id)
                          }} />&nbsp;&nbsp;
                          <AiFillEdit title='edit' color='blue' />&nbsp;&nbsp;
                          <GiCancel color='red' title='cancel' />
                        </td>
                      </tr>
                    )
                  )
                  }
                </tbody>
              </Table>
          }
        </Col>
      </Row>
      {showModal?<ModalForPayment setShowModal={(value)=>setShowModal(value)} bookingId={bookingId} fullname={fullname}/>:null}
    </div>
  )
}
