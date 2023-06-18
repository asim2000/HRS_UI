import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap'

export default function () {
  const navigate = useNavigate()
  return (
    <div>
        <Row className='text-center'>
            <Col>
              <h3>Register</h3>
            </Col>
        </Row>
        <Row className='m-5'>
            <Col className='col-md-6' onClick={()=>navigate('/register/customer')}>
                <Card className='registerCard'>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Customer
                    </CardBody>
                </Card>
            </Col>
            <Col className='col-md-6 ml-auto'>
            <Card className='registerCard' onClick={()=>navigate('/register/business')}>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Business
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row className='justify-content-center m-5'>
            <Col xs="6">
            <Card className='registerCard' onClick={()=>navigate('/register/hotel')}>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Hotel
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
  )
}
