import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import alertify from 'alertifyjs'

export default function HotelAdminBook() {
    const navigate = useNavigate()
    const book = ()=> {
        navigate('/hotel/admin/booking-history')
        alertify.success('Successfully book room.')
    }
    return (
        <div>
            <Form>
            <Row>
                <Col>
                  <FormGroup>
                    <Label>Check-in/Check-out</Label>
                    <Input type='date'/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Room Number</Label>
                    <Input type='select'>
                        <option>100</option>
                        <option>101</option>
                        <option>102</option>
                        <option>103</option>
                    </Input>
                  </FormGroup>
                   <i style={{color:'red',display:'block',marginTop:'30px'}}>Total 200Azn</i>
                <Button color='primary' className='mt-4' onClick={()=>book()}>Book</Button>
                </Col>
                <Col>
                   <FormGroup check>
                    <Input type='checkbox'/>
                    <Label check>Breakfast(30 Azn)</Label>
                   </FormGroup>
                   <FormGroup check>
                    <Input type='checkbox'/>
                    <Label check>Parking(10 Azn)</Label>
                   </FormGroup>
                   <FormGroup check>
                    <Input type='checkbox'/>
                    <Label check>Sauna(30 Azn)</Label>
                   </FormGroup>
                </Col>
            </Row>
            </Form>
        </div>
    )
}
