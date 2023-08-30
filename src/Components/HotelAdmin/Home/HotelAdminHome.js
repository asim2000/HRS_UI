import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, Col, Input, InputGroup, Label, Row } from 'reactstrap'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { GiCancel } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HotelService from '../../../services/hotelService'
import alertify from 'alertifyjs'
import BootstrapDateRangePicker from '../../DateRangeBox/BootstrapDateRangePicker'
import RoomSelectBox from '../../RoomSelectBox/RoomSelectBox'
import { useSelector } from 'react-redux'
import RoomService from '../../../services/roomService'
import RoomStyleService from '../../../services/roomStyleService'
import { Divider, Select, Form } from 'semantic-ui-react'
import PaymentService from '../../../services/paymentService'
import CustomModal from '../../Modal/CustomModal'
import { FaStar } from 'react-icons/fa'
import TextInput from '../../../utilities/customFormControls/TextInput'
import { Formik, } from 'formik'
import * as Yup from 'yup'
import PersonService from '../../../services/personService'

export default function HotelAdminHome() {
    const navigate = useNavigate()
    const { adminId } = useParams()
    const url = `/hotel/create/${adminId}`
    const [hotel, setHotel] = useState()
    const checkIn = useSelector(state => state.checkInReducer)
    const checkOut = useSelector(state => state.checkOutReducer)
    const adultCount = useSelector(state => state.adultReducer)
    const childreenCount = useSelector(state => state.childreenReducer)
    const roomCount = useSelector(state => state.roomReducer)
    const [randomRoom, setRandomRoom] = useState()
    const [roomStyles, setRoomStyles] = useState([])
    const [selectedRoomStyle, setSelectedRoomStyle] = useState('STANDART')
    const [payAmount, setPayAmount] = useState()
    const [existsRoom, setExistsRoom] = useState(true)
    const [customer, setCustomer] = useState()
    useEffect(() => {
        const hotelService = new HotelService()
        hotelService.getByEmployeeId(adminId)
            .then(result => {
                setHotel(result.data)
            }).catch(error => {
                alertify.error(error.message)
            })

        const roomStyleService = new RoomStyleService()
        roomStyleService.getAll()
            .then(result => {
                setRoomStyles(result.data)
            }).catch(error => {
                alertify.error(error.message)
            })
    }, [])

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
            orderedId: adminId,
            customer:customer,
            roomId: randomRoom.id,
            checkIn: checkIn,
            checkOut: checkOut,
            pricePerNight: randomRoom.pricePerNight
        }
        const payment = {
            booking: booking,
            amount: payAmount
        }
        const paymentService = new PaymentService()
        paymentService.createPaymentForHotel(payment)
            .then(result => {
                document.getElementById('bookSection').style.visibility = 'hidden'
                alertify.success('Successfully booking room')
            }).catch(error => {
                alertify.error(error.message)
            })
    }
    const searchRoom = () => {
        setRandomRoom(null)
        document.getElementById('spinner').style.visibility = 'visible'
        setTimeout(() => {
            const roomService = new RoomService()
            roomService.getRandomRoom({
                hotelId: hotel.id,
                checkIn: checkIn,
                checkOut: checkOut,
                roomCount: roomCount,
                adultCount: adultCount,
                childreenCount: childreenCount,
                roomStyle: selectedRoomStyle
            }).then(result => {
                setRandomRoom(result.data)
                setPayAmount(Math.round(((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24) + 1) * result.data.pricePerNight))
                document.getElementById('spinner').style.visibility = 'hidden'
            }).catch(error => {
                alertify.error(error.message)
                document.getElementById('spinner').style.visibility = 'hidden'
            })
        }, 2000);

    }
    const book = () => {
        const hotelService = new HotelService()
        hotelService.checkIfExistsRoom(hotel.id)
            .then(result => {
                if (!result.data) {
                    setExistsRoom(false)
                } else {
                    document.getElementById('bookSection').style = 'visible'
                    window.scrollTo(0, document.body.scrollHeight);
                }
            }).catch(error => {
                alertify.error(error.message)
            })

    }

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

    // const getPersonByEmail = e => {
    //     console.log(e.target.value)
    //     const personService = new PersonService()
    //     personService.getByEmail(e.target.value)
    //         .then(result => {
    //             setCustomer(result.data)
    //             console.log(customer)
    //         })
    //         .catch(error => {
    //             setCustomer({})
    //             document.getElementById('name').value = null
    //             document.getElementById('surname').value = null
    //             document.getElementById('phone').value = null
    //         })
    // }

    const initialValues = {
        email: '',
        name: '',
        surname: '',
        phone: ''
    }

    const schema = Yup.object({
        email: Yup.string().email().required(),
        name: Yup.string().required(),
        surname: Yup.string().required(),
        phone: Yup.string().required()
    })


    return (
        <div>
            <Row>
                <Col>
                    {
                        hotel == null
                            ? <div>
                                <h5>Qeydiyyatda olan otel yoxdur</h5>
                                <Link to={url}>Otel elave et</Link>
                            </div>
                            : <Card>
                                <Row>
                                    <Col md='6'>
                                        <CardImg height='400px' width='auto' src={require('../../../assets/img/' + hotel?.mainImageName)} alt='Hotel Image' />
                                    </Col>
                                    <Col md='6'>
                                        <CardBody>
                                            <h5>{hotel.name}</h5>
                                            <p>{Array.from(Array(hotel.star), () => (<FaStar size='15' color='#0d6efd' />))}</p>
                                            <p>Azerbaijan,{hotel.address.city.name},{hotel.address.addressLine}</p>
                                            <p>{hotel.contact.phone}</p>
                                        </CardBody>
                                        <CardFooter className='d-flex'>
                                            <Button onClick={() => navigate(`/hotel/${hotel.id}/report`)} color='primary'>Report</Button>&nbsp;
                                            <Button onClick={() => navigate(`/hotel/${hotel.id}/room/add`)} color='primary'>Add Room</Button>&nbsp;
                                            <Button onClick={() => navigate(`/hotel/${hotel.id}/rooms`)} color='primary'>Room List</Button>&nbsp;
                                            <Button onClick={() => navigate(`/hotel/${hotel.id}/booking-history`)} color='primary'>Booking history</Button>&nbsp;
                                            <Button onClick={() => book()} color='primary'>Book Now</Button>
                                            <AiFillEye size='23' className='ms-auto' color='green' title='view' />
                                            <AiFillEdit size='23' className='ms-3' title='edit' color='blue' />
                                            <RiDeleteBin6Fill size='23' className='ms-3' color='red' title='delete' />
                                        </CardFooter>
                                    </Col>
                                </Row>
                            </Card>
                    }
                </Col>
            </Row>
            {
                existsRoom == true
                    ?
                    <Row id='bookSection' style={{ visibility: 'hidden' }}>
                        <Col lg='3'>
                            <Card className='mt-3'>
                                <CardBody>
                                    <div className='mt-1'>
                                        <BootstrapDateRangePicker />
                                    </div>
                                    <div className='mt-4'>
                                        <RoomSelectBox />
                                    </div>
                                    <div>
                                        <Select name='roomStyle' onChange={(e, { value }) => setSelectedRoomStyle(value)} className='w-100 mb-3' id='roomStyle' defaultValue={selectedRoomStyle} options={roomStyles?.map(roomStyle => ({ value: roomStyle, text: roomStyle, key: roomStyle }))} />
                                    </div>
                                    <div className='mt-4'>
                                        <Button color='primary' className='w-100' onClick={() => searchRoom()}>Search room</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg='9'>
                            <div class="spinner-grow text-primary" style={{ width: '5rem', height: '5rem', marginTop: '100px', marginLeft: '300px', visibility: 'hidden', position: 'absolute' }} id='spinner' role="status"></div>
                            {
                                randomRoom && (<Card className='mt-3'>
                                    <CardBody>
                                        <Row className='d-flex'>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <p>Room Number: {randomRoom.roomNumber}</p>
                                                        <p>Price: {randomRoom.pricePerNight} Azn</p>
                                                        <p>Room Style: {randomRoom.roomStyle}</p>
                                                        <p>Room Size: {randomRoom.roomSize}</p>
                                                        <p>Adult Count: {randomRoom.adultCount}</p>
                                                        <p>Childreen Count: {randomRoom.childreenCount}</p>
                                                        <p>Room Count: {randomRoom.roomCount}</p>
                                                        <p>Shower Count: {randomRoom.showerCount}</p>
                                                        <p>Twin Bed Count: {randomRoom.twinBedCount}</p>
                                                        <p>Single Bed Count: {randomRoom.singleBedCount}</p>
                                                        <p>Pet Allowed: {randomRoom.isPetAllowed ? 'Yes' : 'No'}</p>
                                                    </Col>
                                                    <Col>
                                                        <ul>
                                                            {
                                                                randomRoom.items?.map(item => (<li>{item.name}</li>))
                                                            }
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Divider vertical />
                                            <Col>
                                                        <Form onSubmit={() => bookNow()} className='form ui'>
                                                <Row>
                                                    <Col>
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
                                                    </Col>
                                                </Row>
                                                <Row className='mt-3'>
                                                    <Col xs='3'>
                                                    <Input type='number' value={payAmount} onChange={e=>setPayAmount(e.target.value)} />
                                                    </Col>
                                                    <Col>
                                                      <Button className='bg-primary w-100' type='submit'>Book Now <i>{payAmount} AZN</i></Button>
                                                    </Col>
                                                </Row>
                                                </Form>
                                            </Col>

                                        </Row>
                                    </CardBody>
                                </Card>)
                            }
                        </Col>
                    </Row>
                    :
                    <CustomModal title='Info' setState={setExistsRoom} buttonValue='Add room' link={'/hotel/' + hotel.id + '/room/add'} message='No room please before add room' />
            }

        </div>
    )
}
