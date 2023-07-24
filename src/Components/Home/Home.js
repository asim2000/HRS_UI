import React, { useEffect, useReducer, useState } from 'react'
import HotelCard from '../HotelCard/HotelCard'
import Header from '../Header/Header'
import { Col, Row } from 'reactstrap'
import PagePagination from '../Pagination/PagePagination'
import alertify from 'alertifyjs'
import HotelService from '../../services/hotelService'

export default function Home() {
  const [hotels, setHotels] = useState([])
  console.log(useReducer(state=>state.checkInReducer))
  useEffect(() => {
    searchHotel({})
  },[])
  const searchHotel = (data) => {
    const hotelService = new HotelService()
    hotelService.getHomeHotels(data)
    .then(result=>{
      if(result.data.code === 200){
        setHotels(result.data.data)
      }
      else{
        setHotels([])
        alertify.error(result.data.message)
        console.log(hotels)
      }
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
