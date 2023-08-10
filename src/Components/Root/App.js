import React, { Component, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Footer/Footer'
import { Navigate, Route, Router, Routes, useNavigate, useParams } from 'react-router-dom'
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
import { getJwt, removeJwt } from '../../utilities/jwt/jwt'
import AddHotelService from '../Admin/HotelService/AddHotelService'
import ListHotelService from '../Admin/HotelService/ListHotelService'
import AddRoomItem from '../Admin/RoomItem/AddRoomItem'
import ListRoomItem from '../Admin/RoomItem/ListRoomItem'
import { isAuthenticated } from '../../utilities/jwt/isAuthenticate'
function App() {
  const navigate = useNavigate()
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
              <Route exact path='/' element={<Navigate to='/home/index' />} />
              <Route exact path='/login' Component={Login} />
              <Route exact path='/register' Component={Register} />
              <Route exact path='/select-register' Component={SelectRegister} />
              <Route exact path='/home/index' Component={Home} />
              <Route exact path='/hotel/:hotelId/details' Component={HotelDetails} />

              <Route path='/hotel' Component={ProtectedRoute}>
                <Route exact path='/hotel/create/:adminId' Component={CreateHotel} />
                <Route exact path='/hotel/:hotelId/rooms' Component={Rooms} />
                <Route exact path='/hotel/:hotelId/room/add' Component={AddRoom} />
                <Route exact path='/hotel/admin/:adminId' Component={HotelAdmin} />
                <Route exact path='/hotel/room/book' Component={HotelAdminBook} />
                <Route exact path='/hotel/:hotelId/booking-history' Component={HotelAdminBookHistory} />
              </Route>
              <Route path='/customer' Component={ProtectedRoute}>
                <Route exact path='/customer/:userId/booking-history' Component={BookHistory} />
              </Route>
              <Route path='/payment' Component={ProtectedRoute}>
                <Route exact path='/payment/:userId/:roomId' Component={Payment} />
              </Route>
              <Route path='/admin' Component={ProtectedRoute}>
                <Route exact path='/admin/hotel-service/add' Component={AddHotelService}/>
                <Route exact path='/admin/hotel-service/list' Component={ListHotelService}/>
                <Route exact path='/admin/room-item/add' Component={AddRoomItem}/>
                <Route exact path='/admin/room-item/list' Component={ListRoomItem}/>
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