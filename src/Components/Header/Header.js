import React, { Component, useEffect, useState } from 'react';
import { Button, Card, CardBody, Col, Container, FormGroup, Input, Jumbotron, Label, Row } from 'reactstrap';
import '../../assets/css/header.css'
import RoomSelectBox from '../RoomSelectBox/RoomSelectBox';
import CityService from '../../services/cityService';
import alertify from 'alertifyjs';
import './Header.css'
import MuiDateRangePicker from '../DateRangeBox/MuiDateRangePicker';
import { useSelector } from 'react-redux';

export default function Header(props) {
  const [cities, setCities] = useState([])
  const [selectedCity,setSelectedCity] = useState()
  const adultCount = useSelector(state=>state.adultReducer)
  const childreenCount = useSelector(state=>state.childreenReducer)
  const roomCount = useSelector(state=>state.roomReducer)
  useEffect(() => {
    const cityService = new CityService();
    cityService.getCities()
      .then(result => {
        if (result.data.code === 200) {
          setCities(result.data.data)
        } else {
          alertify.error(result.data.message)
        }
      })
  }, [])

  function search(){
    props.searchHotel({
      cityId:selectedCity,
      adultCount:adultCount,
      childreenCount:childreenCount,
      roomCount:roomCount
    })
  }

  function showOrHide(event) {
    var x = document.getElementById('roomConfig');
    if (this.state.visibility === 'hidden') {
      this.setState({ visibility: 'visible' })
    } else {
      this.setState({ visibility: 'hidden' })
    }
  }
  return (
        <Row style={{ margin: "0 1px 0 1px" }} className='bg-light p-5'>
          <Col className='mb-2' lg="3" md='4' sm='6' xs='12'>

            <Card className='headerInputCard'>
              <CardBody className='vertical-center'>
              <FormGroup>
                <Input type="select" name="city" id="city" onChange={(event)=>setSelectedCity(event.target.value)}>
                  <option value={null}>Where are you going?</option>
                  {cities.map(city=>(<option value={city.id}>{city.name}</option>))}
                </Input>
            </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col className='mb-2' lg="3" md='4' sm='6' xs='12'>
            <Card style={{height:'86px'}}>
              <CardBody className='vertical-center'>
                <MuiDateRangePicker/>
              </CardBody>
            </Card>
          </Col>
          <Col className='mb-2' lg="4" md='4' sm='6' xs='12'>
            <Card className='headerInputCard'>
              <CardBody className='vertical-center'>
                <RoomSelectBox />
              </CardBody>
            </Card>
          </Col>
          <Col className='mb-2' lg="2" md='4' sm='6' xs='12'>
            <Card className='headerInputCard'>
              <CardBody className='vertical-center'>
                <Button className='mb-3' style={{ width: "100%" }} onClick={()=>search()}>Search</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
  )
}