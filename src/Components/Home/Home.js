import React, { useEffect, useReducer, useState } from 'react'
import HotelCard from '../HotelCard/HotelCard'
import Header from '../Header/Header'
import { Col, Row } from 'reactstrap'
import PagePagination from '../Pagination/PagePagination'
import alertify from 'alertifyjs'
import HotelService from '../../services/hotelService'
import { useSelector } from 'react-redux'

export default function Home() {
  const [hotels, setHotels] = useState([])
  const checkIn = useSelector(state=>state.checkInReducer)
  const checkOut = useSelector(state=>state.checkOutReducer)
  const adultCount = useSelector(state=>state.adultReducer)
  const childreenCount = useSelector(state=>state.childreenReducer)
  const roomCount = useSelector(state=>state.roomReducer)
  useEffect(() => {
    searchHotel({
      checkIn:checkIn,
      checkOut:checkOut,
      roomCount:roomCount,
      adultCount:adultCount,
      childreenCount:childreenCount
    })
  },[])
  const searchHotel = (data) => {
    const hotelService = new HotelService()
    hotelService.getHomeHotels(data)
    .then(result=>{
        setHotels(result.data)
    }).catch(error=>{
      setHotels([])
      alertify.error(error.message)
    })
  }
    return (
      <div>
        <Row className='mb-2'>
          <Col>
            <Header searchHotel = {searchHotel}/>
          </Col>
        </Row>
          <Row>
            {
              hotels.map(hotel=><Col key={hotel.id} lg='3' md='4' sm='6' xs='12'><HotelCard hotel={hotel}/></Col>)
            }
          </Row>
        <Row className='mt-5'>
          <Col className='d-flex justify-content-center'>
            <PagePagination/>
          </Col>
        </Row>
      </div>
    )
  }
