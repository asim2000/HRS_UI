import React, { useEffect, useState } from 'react'
import HotelCard from '../HotelCard/HotelCard'
import Header from '../Header/Header'
import { Col, Row } from 'reactstrap'
import PagePagination from '../Pagination/PagePagination'
import HomeService from '../../services/homeService'
import alertify from 'alertifyjs'
import HotelService from '../../services/hotelService'

export default function Home() {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    const hotelService = new HotelService()
    hotelService.getHomeHotels()
    .then(result=>{
      setHotels(result.data)
    })
    .catch(error=>alertify.error(error.response.data.message))
  }, [])
    return (
      <div>
        <Row className='mb-2'>
          <Col>
            <Header/>
          </Col>
        </Row>
          <Row>
            {
              hotels.map(hotel=><Col key={hotel.id} lg='3' md='4' sm='6' xs='12'><HotelCard hotel={hotel}/></Col>)
            }
          </Row>
        {/* <Row>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
        </Row>
        <Row>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
        </Row>
        <Row>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
          <Col lg='3' md='4' sm='6' xs='12'><HotelCard/></Col>
        </Row> */}
        <Row className='mt-5'>
          <Col className='d-flex justify-content-center'>
            <PagePagination/>
          </Col>
        </Row>
      </div>
    )
  }
