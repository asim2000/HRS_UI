import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Input, InputGroup, Row, Table } from 'reactstrap'
import {AiFillEdit} from 'react-icons/ai'
import {GiCancel} from 'react-icons/gi'
import BookingService from '../../services/bookingService'
import alertify from 'alertifyjs'
export default function BookHistory(props) {
    const navigate = useNavigate()
    const [bookings, setBookings] = useState([])
    const {userId} = useParams()
    useEffect(() => {
      const bookingService = new BookingService()
      bookingService.getAllByPersonId(userId)
      .then(result=>{
        if(result.data.code === 200){
          setBookings(result.data.data)
          console.log(result.data.data)
        }else{
          alertify.error(result.data.message)
        }
      })
    }, [])
    
    return (
        <div>
            <Row>
                <Col>
                    <h5>Bookings</h5>
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
                    <InputGroup className='d-flex ms-auto' style={{width:"350px"}}>
                        <Input type='text' className='d-flex ms-auto'/>
                        <Button>Search booking</Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
              <Col>
              <Table>
        <thead>
          <tr>
            <th>Hotel name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Booking Status</th>
            <th>Check-In/Check-Out</th>
            <th>Room</th>
            <th>Adult</th>
            <th>Childreen</th>
            <th>Price Per Night</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Booking Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          bookings.map(booking=>(
            <tr>
            <td>{booking.room.hotel.name}</td>
            <td>Azerbaijan,{booking.room.hotel.address.city.name},{booking.room.hotel.address.addressLine}</td>
            <td>{booking.room.hotel.contact.phone}</td>
            <td>{booking.bookingStatus}</td>
            <td>{booking.checkIn} / {booking.checkOut}<br/><i style={{color:'red'}}>{(new Date(booking.checkOut).getTime()-new Date(booking.checkIn).getTime())/(1000 * 3600 * 24)} days</i></td>
            <td>{booking.room.roomCount}</td>
            <td>{booking.room.adultCount}</td>
            <td>{booking.room.childreenCount}</td>
            <td>{booking.pricePerNight} AZN</td>
            <td>{booking.pricePerNight*((new Date(booking.checkOut).getTime()-new Date(booking.checkIn).getTime())/(1000 * 3600 * 24)+1)} AZN</td>
            <td>{booking.payments.map(payment=>payment.amount).reduce((partialSum, a) => partialSum + a, 0)} AZN</td>
            <td>{booking.createdDate.split('T')[0]}<br/>{booking.createdDate.split('T')[1]}</td>
            <td>
                <AiFillEdit title='edit' color='blue'/>
                <GiCancel color='red' title='cancel' className='ms-3'/>
            </td>
          </tr>
          ))
        }
        </tbody>
      </Table>
               </Col>
            </Row>
        </div>
    )
}
