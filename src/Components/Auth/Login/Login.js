import React, { Component } from 'react'
import { Link } from 'react-router-dom/dist'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Row className='d-flex justify-content-center'>
          <Col lg='6' md='8' sm='10' xs='12'>
               <Form>
              <FormGroup className='m-3'>
                <Label for="email">Lastname</Label>
                <Input type="email" name="email" id="email" placeholder="Enter email" />
              </FormGroup>
              <FormGroup className='m-3'>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Enter password" />
              </FormGroup>
              <FormGroup className='m-3'>
                <Link to='/forgot/password'>Forgot password?</Link><br/>
                <Button className='w-100 mt-3' type='submit'>Login</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
