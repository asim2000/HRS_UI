import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import HotelList from '../Home/HotelList'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import HotelCard from '../Hotel/HotelCard'
import Header from '../Header/Header'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import CustomerRegister from '../Auth/Register/CustomerRegister'
import HotelRegister from '../Auth/Register/HotelRegister'
import BusinessRegister from '../Auth/Register/BusinessRegister'
import Navi,{NaviWithNavigate} from '../Navi/Navi'

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
        <Row>
          <Col>
            <NaviWithNavigate/>
          </Col>
        </Row>
        <Row className='mt-3'>

          <Routes>
            <Route path='/' element={<Navigate to='/hotel/list'/>}></Route>
            <Route path='/hotel/list' Component={HotelList}/>
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Register}/>
            <Route path='/register/customer' Component={CustomerRegister}/>
            <Route path='/register/business' Component={BusinessRegister}/>
            <Route path='/register/hotel' Component={HotelRegister}/>
            <Route path='*' Component={NotFound}/>
          </Routes>
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
