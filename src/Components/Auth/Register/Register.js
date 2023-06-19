import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap'
import '../../../assets/css/register.css'
export default function () {
  const navigate = useNavigate()
  return (
    <div>
        <Row className='text-center'>
            <Col>
              <h3>Register</h3>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col md='4' sm='6' xs='12' className='m-3' onClick={()=>navigate('/register/customer')}>
                <Card className='registerCard'>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Customer
                    </CardBody>
                </Card>
            </Col>
            <Col md='4' sm='6' xs='12' className='m-3'>
            <Card className='registerCard' onClick={()=>navigate('/register/business')}>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Business
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col md='4' sm='6' xs='12' className='m-3'>
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
