import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import Footer from '../Footer/Footer'
import HotelList from '../Home/HotelList'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import Navi,{NaviWithNavigate} from '../Navi/Navi'
import HotelDetails from '../HotelDetails/HotelDetails'
import HotelDetailCarousel from '../Carousel/HotelDetailCarousel'
import BookHistory from '../BookHistory/BookHistory'
import Payment from '../Payment/Payment'
import CreateHotel from '../HotelAdmin/CreateHotel'
import Rooms from '../HotelAdmin/Rooms'
import AddRoom from '../HotelAdmin/AddRoom'
import Hotels from '../HotelAdmin/Hotels'
import HotelAdminBook from '../HotelAdmin/HotelAdminBook'
import HotelAdminBookHistory from '../HotelAdmin/HotelAdminBookHistory'
import SelectRegister from '../Auth/Register/SelectRegister'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
        <Row className='mb-3'>
          <Col>
            <NaviWithNavigate/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes>
            <Route path='/' element={<Navigate to='/home/index'/>}></Route>
            <Route path='/home/index' Component={HotelList}/>
            <Route path='/hotel/details' Component={HotelDetails}/>
            <Route exact path='/hotel/create' Component={CreateHotel}/>
            <Route path='/hotel/rooms' Component={Rooms}/>
            <Route path='/hotel/room/add' Component={AddRoom}/>
            <Route path='/hotel/list' Component={Hotels}/>
            <Route path='/hotel/room/book' Component={HotelAdminBook}/>
            <Route path='booking-history' Component={()=>(<BookHistory url='/home/index'/>)}/>
            <Route path='/hotel/admin/booking-history' Component={()=>(<HotelAdminBookHistory url='/hotel/admin/rooms'/>)}/>
            <Route path='payment' Component={Payment}/>
            <Route path='carousel' Component={HotelDetailCarousel}/>
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Register}/>
            <Route path='/select-register' Component={SelectRegister}/>
            <Route path='*' Component={NotFound}/>
          </Routes>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
export default App;