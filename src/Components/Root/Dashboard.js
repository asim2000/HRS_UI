import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import Sidebar from '../Sidebar/Sidebar'
import HotelList from '../Home/HotelList'
import { Outlet } from 'react-router-dom'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col xs="2"><Sidebar/></Col>
            <Col xs="10"><Outlet/></Col>
        </Row>
      </div>
    )
  }
}
