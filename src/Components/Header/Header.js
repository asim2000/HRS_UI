import React, { Component } from 'react';
import {Button, Card, CardBody, Col, Form, FormGroup, Input, Jumbotron, Label, Row} from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <Form>
      <Col className='bg-light text-dark p-3'>
       <Row className='bg-light p-3'>
        <Col lg="3" md='4' sm='6' xs='12'>
           <Card>
             <CardBody>
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
        <Col lg="4" md='4' sm='6' xs='12'>
         <Card>
           <CardBody>
           <FormGroup>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
           </CardBody>
         </Card>
        </Col>
        <Col lg="3" md='4' sm='6' xs='12'>
        <Card>
             <CardBody>
                <FormGroup>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>2 adults - 0 children - 1 room</option>
                  </Input>
                </FormGroup>
             </CardBody>
           </Card>
        </Col>
        <Col lg="2" md='4' sm='6' xs='12'>
            <Button className='p-3' style={{width:"100%"}} type='submit'>Search</Button>
        </Col>
       </Row>
      </Col>
        </Form>
//       <div>
//         <div className="container-fluid bg-light text-dark p-5">
//           <div className="container bg-light p-5">
            
//           </div>
// </div>
//       </div>
    )
  }
}
