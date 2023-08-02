import React, { Component, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Footer/Footer'
import { Navigate, Route, Router, Routes, useParams } from 'react-router-dom'
import NotFound from './NotFound'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import Navi from '../Navi/Navi'
import HotelDetails from '../HotelDetails/HotelDetails'
import HotelDetailCarousel from '../Carousel/HotelDetailCarousel'
import BookHistory from '../BookHistory/BookHistory'
import Payment from '../Payment/Payment'
import CreateHotel from '../HotelAdmin/CreateHotel'
import Rooms from '../HotelAdmin/Rooms'
import AddRoom from '../HotelAdmin/AddRoom'
import HotelAdminBook from '../HotelAdmin/HotelAdminBook'
import HotelAdminBookHistory from '../HotelAdmin/HotelAdminBookHistory'
import SelectRegister from '../Auth/Register/SelectRegister'
import Home from '../Home/Home'
import HotelAdmin from '../HotelAdmin/HotelAdmin'
import axios from 'axios'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { Switch } from '@mui/material'
import { getJwt } from '../../utilities/jwt/jwt'
function App() {
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getJwt()}`
  }, [])

  return (
    <div>
      <Container>
        <Row className='mb-3'>
          <Col>
            <Navi />
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes>
              <Route path='/login' Component={Login} />
              <Route path='/register' Component={Register} />
              <Route path='/select-register' Component={SelectRegister} />
              <Route path='/' element={<Navigate to='/home/index' />} />
              <Route path='/home/index' Component={Home} />
              <Route exact path='/hotel/:hotelId/details' Component={HotelDetails} />

              <Route exact path='/hotel' Component={ProtectedRoute}>
                <Route exact path='/hotel/create/:adminId' Component={CreateHotel} />
                <Route exact path='/hotel/:hotelId/rooms' Component={Rooms} />
                <Route exact path='/hotel/:hotelId/room/add' Component={AddRoom} />
                <Route exact path='/hotel/admin/:adminId' Component={HotelAdmin} />
                <Route exact path='/hotel/room/book' Component={HotelAdminBook} />
                <Route exact path='/hotel/admin/:userId/booking-history' Component={BookHistory} />
              </Route>
              <Route exact path='/customer' Component={ProtectedRoute}>
                <Route exact path='/customer/:userId/booking-history' Component={BookHistory} />
              </Route>
              <Route exact path='/payment' Component={ProtectedRoute}>
                <Route exact path='/payment/:userId/:roomId' Component={Payment} />
              </Route>

              <Route path='*' Component={NotFound} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default App;