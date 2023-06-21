import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import alertify from 'alertifyjs'

export default function CreateHotel() {
    const navigate = useNavigate()
    const save = ()=> {
        navigate('/hotel/list')
        alertify.success('Successfully created hotel')
    }
    return (
        <div>
        <Form>
            <h1>Create Hotel</h1><hr/>
            <Row>
                <Col md='6'>
                        <FormGroup>
                            <Label for='name'>Hotel Name</Label>
                            <Input type='text' name='name' id='name' placeholder='Enter hotel name' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='city'>City</Label>
                            <Input type='text' name='city' id='city' placeholder='Enter city name' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='address'>Address Line</Label>
                            <Input type='text' name='address' id='address' placeholder='Enter address line' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='phone'>Phone</Label>
                            <Input type='text' name='phone' id='phone' placeholder='Enter phone number' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'>Description</Label>
                            <Input type='textarea' name='description' id='description' placeholder='Enter description' />
                        </FormGroup>
                        <Button onClick={() => save()} color='primary'>Save</Button>
                </Col>
                <Col md='6'>
                    <h5>Services</h5>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Free Wifi</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Resturant</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Parking</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Fitnees</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Sauna</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Spa</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Bar</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Swimming pool</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Room service</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Garden</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Fotball</Label>
                    </FormGroup>
                    <FormGroup className='mt-5'>
                            <Label for='image'>Image</Label>
                            <Input type='file' name='image' id='image' placeholder='Choose hotel image' />
                        </FormGroup>
                </Col>
            </Row>
                    </Form>
        </div>
    )
}

