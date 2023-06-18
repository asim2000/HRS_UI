import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6">
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
                <Button type='submit'>Login</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
