import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RoomService from '../../services/roomService'
import alertify from 'alertifyjs'
import PersonService from '../../services/personService'
import PaymentService from '../../services/paymentService'
import { Button, Col, Form, Input, InputGroup, Label, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { getJwt } from '../../utilities/jwt/jwt'

export default function CustomerRegisterForBroker() {
    const {brokerId} = useParams()
    const {roomId} = useParams()
    const checkIn = useSelector(state => state.checkInReducer)
    const checkOut = useSelector(state => state.checkOutReducer)
    const [room, setRoom] = useState()
    const [amount, setAmount] = useState()
    const [customer, setCustomer] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        const roomService = new RoomService()
        roomService.getById(roomId)
        .then(result=>{
            setRoom(result.data)
            setAmount(Math.round(((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24) + 1) * result.data.pricePerNight))
        }).catch(error=>{
            alertify.error(error.message)
        })
    },[])
    const getPersonByEmail = e => {
        const personService = new PersonService()
        personService.getByEmail(e.target.value)
            .then(result => {
                setCustomer(result.data)
            }).catch(error => {
                setCustomer(null)
                document.getElementById('name').value = null
                document.getElementById('surname').value = null
                document.getElementById('phone').value = null
            })
    }
    const bookNow = () => {
        const email = document.getElementById('email').value
        const name = document.getElementById('name').value
        const surname = document.getElementById('surname').value
        const phone = document.getElementById('phone').value

        const customer = {
            email:email,
            name:name,
            surname:surname,
            phone:phone
        }

        const booking = {
            orderedId: brokerId,
            customer:customer,
            roomId: roomId,
            checkIn: checkIn,
            checkOut: checkOut,
            pricePerNight: room.pricePerNight
        }
        const payment = {
            booking: booking,
            amount: amount
        }
        const paymentService = new PaymentService()
        paymentService.createPaymentForBroker(payment)
        .then(result=>{
            const {sub} = jwtDecode(getJwt())
            navigate(`/broker/${sub}/BookingHistory`)
            alertify.success('Successfully booking room')
        }).catch(error=>{
            alertify.error(error.message)
        })

    }
    return (
        <Form onSubmit={() => bookNow()} className='form ui'>
            <Row>
                <Col xs='4'>
                    <InputGroup className='mt-2'>
                        <Label htmlFor='email'>Customer Email</Label>
                        <Input type='email' name='email' id='email' placeholder='Enter email' onChange={getPersonByEmail} required />
                    </InputGroup>
                    <InputGroup className='mt-2'>
                        <Label htmlFor='name'>Customer Name</Label>
                        <Input type='text' name='name' id='name' value={customer?.name} placeholder='Enter name' required />
                    </InputGroup>
                    <InputGroup className='mt-2'>
                        <Label htmlFor='surname'>Customer Surname</Label>
                        <Input type='text' name='surname' id='surname' value={customer?.surname} placeholder='Enter surname' required />
                    </InputGroup>
                    <InputGroup className='mt-2'>
                        <Label htmlFor='phone'>Customer Phone</Label>
                        <Input type='text' name='phone' id='phone' value={customer?.contact?.phone} placeholder='Enter phone' required />
                    </InputGroup>
                    <Button className='bg-primary mt-3 w-100' type='submit'>Book <i>{amount} AZN</i></Button>
                </Col>
            </Row>
        </Form>
    )
}
