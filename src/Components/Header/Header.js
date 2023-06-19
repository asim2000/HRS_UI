import React, { Component } from 'react';
import {Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Jumbotron, Label, Row} from 'reactstrap';
import '../../assets/css/header.css'
import RoomSelectBox from '../RoomSelectBox/RoomSelectBox';

export default class Header extends Component {
  state = {
    adult:2,
    childreen:0,
    room:1,
    visibility:'hidden'
  }
  showOrHide(event){
    var x = document.getElementById('roomConfig');
    if (this.state.visibility==='hidden') {
      this.setState({visibility:'visible'})
    } else {
      this.setState({visibility:'hidden'})
    }
  }
  render() {
    return (
        <Row style={{margin:"10px 1px 10px 1px"}} className='bg-light p-5'>
        <Col lg="3" md='4' sm='6' xs='12'>
           <Card>
             <CardBody className='vertical-center'>
                <FormGroup>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Where are you going?</option>
                    <option>Baki</option>
                    <option>Shabran</option>
                    <option>Quba</option>
                    <option>Xacmaz</option>
                  </Input>
                </FormGroup>
             </CardBody>
           </Card>
        </Col>
        <Col lg="3" md='4' sm='6' xs='12'>
         <Card>
           <CardBody className='vertical-center'>
           <FormGroup>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
           </CardBody>
         </Card>
        </Col>
        <Col lg="4" md='4' sm='6' xs='12'>
          <RoomSelectBox/>
        </Col>
        <Col lg="2" md='4' sm='6' xs='12'>
            <Card>
              <CardBody className='vertical-center'>
              <Button className='mb-3' style={{width:"100%"}} type='submit'>Search</Button>
              </CardBody>
            </Card>
        </Col>
        </Row>
    )
  }
}
