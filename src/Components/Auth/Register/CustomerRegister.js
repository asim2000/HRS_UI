import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

export default class CustomerRegister extends Component {
  render() {
    return (
      <div>
        <Col md="6">
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
                <Label for="email">Lastname</Label>
                <Input type="email" name="email" id="email" placeholder="Enter email" />
            </FormGroup>
            <FormGroup className='m-3'>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Enter password" />
            </FormGroup>
            <FormGroup className='m-3'>
                <Link to='/login'>Do you have account?</Link><br/>
                <Button className='mt-3' type='submit'>Register</Button>
            </FormGroup>
        </Form>
        </Col>
      </div>
    )
  }
}
