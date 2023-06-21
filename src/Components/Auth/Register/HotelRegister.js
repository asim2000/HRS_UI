import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import React from 'react'

export default function HotelRegister() {
  const navigate = useNavigate()
  return (
    <div>
        <Row>
          <Col md='6'>
          <Form>
            <FormGroup className='m-3'>
                <Label for="firstname">Firstname</Label>
                <Input type="text" name="firstname" id="firstname" placeholder="Enter firstname" />
            </FormGroup>
            <FormGroup className='m-3'>
                <Label for="lastname">Lastname</Label>
                <Input type="text" name="lastname" id="lastname" placeholder="Enter lastname" />
            </FormGroup>
            <FormGroup className='m-3'>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter email" />
            </FormGroup>
            <FormGroup className='m-3'>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Enter password" />
            </FormGroup>
            <FormGroup className='m-3'>
                <Label for="rePassword">Re Password</Label>
                <Input type="password" name="rePassword" id="rePassword" placeholder="Enter password" />
            </FormGroup>
            <FormGroup className='m-3'>
                <Link to='/login'>Do you have account?</Link><br/>
                <Button onClick={()=>navigate('/hotel/create')} className='mt-3'>Register</Button>
            </FormGroup>
        </Form>
          </Col>
        </Row>
      </div>
  )
}

