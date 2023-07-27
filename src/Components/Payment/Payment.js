import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardText, Col, FormGroup, Input, Label, Progress, Row } from 'reactstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import alertify from 'alertifyjs'
import RoomService from '../../services/roomService'
import { Slider } from '@mui/material'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import valid from 'card-validator'
import TextInput from '../../utilities/customFormControls/TextInput'
import BookingService from '../../services/bookingService'
import { useSelector } from 'react-redux'
import CreditCardTypeService from '../../services/creditCardType'
import CheckInput from '../../utilities/customFormControls/CheckInput'
import PaymentService from '../../services/paymentService'

export default function Payment(props) {
  const navigate = useNavigate()
  const { userId, roomId } = useParams()
  const [room, setRoom] = useState()
  const [minPerCent, setMinPerCent] = useState()
  const [payPerCent, setPayPerCent] = useState()
  const checkIn = useSelector(state => state.checkInReducer)
  const checkOut = useSelector(state => state.checkOutReducer)
  const [creditCardTypes, setCreditCardTypes] = useState([])
  const [isSaveCard, setIsSaveCard] = useState(true)
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
    const creditCardTypeService = new CreditCardTypeService()
    creditCardTypeService.getAll()
      .then(result => {
        if (result.data.code === 200) {
          setCreditCardTypes(result.data.data)
        } else {
          alertify.error(result.data.message)
        }
      })
  }, [])

  const book = (values) => {
    const [expMonth, expYear] = values.expireDate.split('/')
    values.expMonth = expMonth
    values.expYear = expYear
    const booking = {
      roomId: roomId,
      personId: userId,
      checkIn: checkIn,
      checkOut: checkOut,
      pricePerNight: room.pricePerNight
    }
    const payment = {
      creditCard: values,
      booking: booking,
      amount: payPerCent * room.pricePerNight / 100,
      isSaveCard:isSaveCard
    }
    const paymentService = new PaymentService()
    paymentService.create(payment)
      .then(result => {
        if (result.data.code === 200) {
          navigate(`/customer/${userId}/booking-history`)
          alertify.success('Successfully booking room')
        } else {
          alertify.error(result.data.message)
        }
      })
  }
  const initialValues = {
    nameOnCard: '',
    cardNumber: '',
    expireDate: '',
    cvv: '',
    creditCardType: ''
  }

  const schema = Yup.object({
    nameOnCard: Yup.string().required().min(3, 'Name on card is required min 3 character').matches(/^[A-Za-z\s]*$/, 'Name on card is invalid'),
    cardNumber: Yup
      .string()
      .test('test-number', // this is used internally by yup
        'Credit Card number is invalid', //validation message
        value => valid.number(value).isValid) // return true false based on validation
      .required(),
    expireDate: Yup.string()
      .typeError('Not a valid expiration date. Example: MM/YY')
      .max(5, 'Not a valid expiration date. Example: MM/YY')
      .matches(
        /([0-9]{2})\/([0-9]{2})/,
        'Not a valid expiration date. Example: MM/YY'
      )
      .required('Expiration date is required').test(
        'test-credit-card-expiration-date',
        'Invalid Expiration Date has past',
        expirationDate => {
          if (!expirationDate) {
            return false
          }

          const today = new Date()
          const monthToday = today.getMonth() + 1
          const yearToday = today
            .getFullYear()
            .toString()
            .substr(-2)

          const [expMonth, expYear] = expirationDate.split('/')

          if (Number(expYear) < Number(yearToday)) {
            return false
          } else if (
            Number(expMonth) < monthToday &&
            Number(expYear) <= Number(yearToday)
          ) {
            return false
          }

          return true
        }
      )
      .test(
        'test-credit-card-expiration-date',
        'Invalid Expiration Month',
        expirationDate => {
          if (!expirationDate) {
            return false
          }
          const today = new Date()
            .getFullYear()
            .toString()
            .substr(-2)

          const [expMonth] = expirationDate.split('/')

          if (Number(expMonth) > 12) {
            return false
          }

          return true
        }),
    cvv: Yup.string().required().test('test-number', 'Security key invalid', value => valid.cvv(value).isValid),
    creditCardType: Yup.string().required()
  });
  return (
    <div>
      <Button className='mb-3' color='primary' onClick={() => navigate(-1)}><AiOutlineArrowLeft /> Back</Button>
      <Row>
        <Col xs='12' md='6'>
          <Card>
            <CardBody>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                validateOnMount={true}
                onSubmit={(values) => {
                  book(values)
                }}
              >
                <Form className='form ui'>
                  <CheckInput type='radio' br={false} labelValue='Select Credit Card Type' name='creditCardType' options={creditCardTypes?.map(creditCardType => ({ value: creditCardType, text: creditCardType }))} />
                  <FormGroup>
                    <Label for='nameOnCard'>Name On Card</Label>
                    <TextInput type='text' id='nameOnCard' name='nameOnCard' placeholder='Will Smith' />
                  </FormGroup>
                  <FormGroup>
                    <Label for='cardNumber'>Card Number</Label>
                    <TextInput type='text' id='cardNumber' name='cardNumber' placeholder='0000 0000 0000 0000' />
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for='expireDate'>Expire Date</Label>
                        <TextInput type='text' id='expireDate' name='expireDate' placeholder='26/11' />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for='cvv'>CVV</Label>
                        <TextInput type='text' id='cvv' name='cvv' placeholder='345' />
                      </FormGroup>
                    </Col>
                    <Label>You must pay minimum {minPerCent}%</Label>
                    <Slider
                      style={{ width: '600px', margin: '10px' }}
                      min={minPerCent}
                      max={100}
                      onChange={event => setPayPerCent(event.target.value)}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                    />
                    <Col>
                      <Row>
                        <Col xs='3'>
                          <div class="ui toggle checkbox">
                            <input onChange={(event)=>setIsSaveCard(event.target.checked)} checked={isSaveCard} type="checkbox" id="saveCard" name="saveCard" />
                          <label htmlFor='saveCard'>Save card</label>
                          </div>
                        </Col>
                        <Col xs='9'>
                          <Button color='primary' className='w-100' type='submit'>Pay {room?.pricePerNight * payPerCent / 100} AZN</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
