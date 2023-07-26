import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardText, Col, Form, FormGroup, Input, Label, Progress, Row } from 'reactstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import alertify from 'alertifyjs'
import RoomService from '../../services/roomService'
import { Slider } from '@mui/material'

export default function Payment(props) {
  const navigate = useNavigate()
  const { userId, roomId } = useParams()
  const [room, setRoom] = useState()
  const [minPerCent, setMinPerCent] = useState()
  const [payPerCent, setPayPerCent] = useState()
  useEffect(() => {
    const roomService = new RoomService()
    roomService.getByIdForPayment(roomId)
      .then(result => {
        if (result.data.code === 200) {
          setRoom(result.data.data)
          setMinPerCent(result.data.data.payPerCent)
          setPayPerCent(result.data.data.payPerCent)
        } else {
          alertify.error(result.data.message)
        }
      })
  }, [])

  const book = () => {
    navigate('/booking-history')
    alertify.success('Successfully booking hotel')
  }
  return (
    <div>
      <Button className='mb-3' color='primary' onClick={() => navigate(-1)}><AiOutlineArrowLeft /> Back</Button>
      <Row>
        <Col xs='12' md='6'>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for='nameOnCard'>Name On Card</Label>
                  <Input type='text' id='nameOnCard' name='nameOnCard' placeholder='Will Smith' />
                </FormGroup>
                <FormGroup>
                  <Label for='cardNumber'>Card Number</Label>
                  <Input type='text' id='cardNumber' name='cardNumber' placeholder='0000 0000 0000 0000' />
                </FormGroup>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for='expireDate'>Expire Date</Label>
                      <Input type='text' id='expireDate' name='expireDate' placeholder='26/11' />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for='securityCode'>CVV</Label>
                      <Input type='text' id='securityCode' name='securityCode' placeholder='345' />
                    </FormGroup>
                  </Col>
                  <Label>You must pay minimum {minPerCent}%</Label>
                  <Slider
                    style={{width:'600px',margin:'10px'}}
                    min={minPerCent}
                    max={100}
                    onChange={event=>setPayPerCent(event.target.value)}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                  />
                  <Button color='primary' onClick={() => book()}>Pay {room?.pricePerNight * payPerCent / 100} AZN</Button>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
