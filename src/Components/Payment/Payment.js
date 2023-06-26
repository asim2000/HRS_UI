import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardText, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import alertify from 'alertifyjs'

export default function Payment() {
    const navigate = useNavigate()
    const book = ()=> {
        navigate('/booking-history')
        alertify.success('Successfully booking hotel')
    }
  return (
    <div>
        <Button className='mb-3' color='primary' onClick={()=>navigate('/hotel/details')}><AiOutlineArrowLeft /> Back</Button>
        <Row>
            <Col>
              <Card>
                <CardBody>
                <Form>
              <FormGroup>
                    <Label for='nameOnCard'>Name On Card</Label>
                    <Input type='text' id='nameOnCard' name='nameOnCard' placeholder='Will Smith'/>
                </FormGroup>
                <FormGroup>
                    <Label for='cardNumber'>Card Number</Label>
                    <Input type='text' id='cardNumber' name='cardNumber' placeholder='0000 0000 0000 0000'/>
                </FormGroup>
                <Row>
                    <Col>
                    <FormGroup>
                    <Label for='expireDate'>Expire Date</Label>
                    <Input type='text' id='expireDate' name='expireDate' placeholder='26/11'/>
                </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                    <Label for='securityCode'>CVV</Label>
                    <Input type='text' id='securityCode' name='securityCode' placeholder='345'/>
                </FormGroup>
                    </Col>
                    <Button color='primary' onClick={()=>book()}>Book</Button>
                </Row>
              </Form>
                </CardBody>
              </Card>
            </Col>
            <Col>
             <Card style={{height:'100%'}}>
                <CardBody>
                    <p>Room number: 102</p>
                    <p>Services</p>
                    <ul>
                        <li>Room charges 200 Azn</li>
                        <li>Breakfast 100 Azn</li>
                        <li>Garage 20 Azn</li>
                    </ul>
                    <p className='pt-5'>Total 320 Azn</p>
                </CardBody>
             </Card>
            </Col>
        </Row>
    </div>
  )
}
