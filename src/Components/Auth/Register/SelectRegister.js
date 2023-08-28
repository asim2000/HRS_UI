import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap'
import '../../../assets/css/register.css'
import { useDispatch } from 'react-redux'
import * as registerActions from '../../../redux/actions/registerActions'
export default function SelectRegister(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const register = customerType => {
    dispatch(registerActions.changeCustomerType(customerType))
    navigate('/register')
  }
  return (
    <div>
        <Row className='text-center'>
            <Col>
              <h3>Register</h3>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col md='4' sm='6' xs='12' className='m-3' onClick={()=>register('customer')}>
                <Card className='registerCard'>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Customer
                    </CardBody>
                </Card>
            </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
            <Col md='4' sm='6' xs='12' className='m-3'>
            <Card className='registerCard' onClick={()=>register('broker')}>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Broker
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col md='4' sm='6' xs='12' className='m-3'>
            <Card className='registerCard' onClick={()=>register('hotel')}>
                    <CardBody style={{cursor:"pointer"}} className='text-center'>
                        For Hotel
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
  )
}