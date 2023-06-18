import React, { Component } from 'react'
import HotelCard from '../Hotel/HotelCard'
import Header from '../Header/Header'
import { Col, Row } from 'reactstrap'

export default class HotelList extends Component {
  render() {
    return (
      <div>
        <Row className='mb-2'>
          <Col><Header/></Col>
        </Row>
        <Row>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
        </Row>
        <Row>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
        </Row>
        <Row>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
        </Row>
        <Row>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
          <Col xs="4"><HotelCard/></Col>
        </Row>
      </div>
    )
  }
}
