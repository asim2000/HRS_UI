import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, Col, Input, Label, Row } from 'reactstrap'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { GiCancel } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HotelService from '../../services/hotelService'
import alertify from 'alertifyjs'
import BootstrapDateRangePicker from '../DateRangeBox/BootstrapDateRangePicker'
import RoomSelectBox from '../RoomSelectBox/RoomSelectBox'
import { useSelector } from 'react-redux'
import RoomService from '../../services/roomService'
import RoomStyleService from '../../services/roomStyleService'
import { Divider, Select } from 'semantic-ui-react'
import PaymentService from '../../services/paymentService'
import CustomModal from '../Modal/CustomModal'

export default function HotelAdmin() {
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
    useEffect(() => {
        const hotelService = new HotelService()
        hotelService.getByEmployeeId(adminId)
            .then(result => {
                if (result.data.code === 200) {
                    setHotel(result.data.data)
                } else {
                    alertify.error(result.data.message)
                }
            })

        const roomStyleService = new RoomStyleService()
        roomStyleService.getAll()
            .then(result => {
                if (result.data.code === 200) {
                    setRoomStyles(result.data.data)
                } else {
                    alertify.error(result.data.message)
                }
            })
    }, [])

    const bookNow = () => {
        const booking = {
            personId: adminId,
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
                if (result.data.code === 200) {
                    document.getElementById('bookSection').style.visibility = 'hidden'
                    alertify.success('Successfully booking room')
                } else {
                    alertify.error(result.data.message)
                }
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
                if (result.data.code === 200) {
                    setRandomRoom(result.data.data)
                    setPayAmount(Math.round(((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24) + 1) * result.data.data.pricePerNight))
                    document.getElementById('spinner').style.visibility = 'hidden'
                } else {
                    alertify.error(result.data.message)
                    document.getElementById('spinner').style.visibility = 'hidden'
                }
            })
        }, 2000);

    }
    const book = () => {
        const hotelService = new HotelService()
        hotelService.checkIfExistsRoom(hotel.id)
            .then(result => {
                if (result.data.code === 200) {
                    if(!result.data.data){
                       setExistsRoom(false) 
                    }else{
                        document.getElementById('bookSection').style = 'visible'
                    window.scrollTo(0, document.body.scrollHeight);
                    }
                    
                } else {
                    alertify.error(result.data.message)
                }
            })

    }

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
                            : <Card>{console.log(hotel)}
                                <Row>
                                    <Col md='6'>
                                        {console.log(hotel)}
                                        <CardImg src={require('../../assets/img/' + hotel.mainImageName)} alt='Hotel Image' />
                                    </Col>
                                    <Col md='6'>
                                        <CardBody>
                                            <h5>{hotel.name}</h5>
                                            <p>Azerbaijan,{hotel.address.city.name},{hotel.address.addressLine}</p>
                                            <p>{hotel.contact.phone}</p>
                                        </CardBody>
                                        <CardFooter className='d-flex'>
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
                existsRoom==true
                    ?
                    <Row id='bookSection' style={{ visibility: 'hidden' }}>
                        <Col lg='3'>
                            <div className='mt-5'>
                                <BootstrapDateRangePicker />
                            </div>
                            <div className='mt-5'>
                                <RoomSelectBox />
                            </div>
                            <div>
                                <Select name='roomStyle' onChange={(e, { value }) => setSelectedRoomStyle(value)} className='w-100 mb-3' id='roomStyle' defaultValue={selectedRoomStyle} options={roomStyles?.map(roomStyle => ({ value: roomStyle, text: roomStyle, key: roomStyle }))} />
                            </div>
                            <div className='mt-3'>
                                <Button color='primary' className='w-100' onClick={() => searchRoom()}>Search room</Button>
                            </div>
                        </Col>
                        <Col lg='9'>
                            <div class="spinner-grow text-primary" style={{ width: '5rem', height: '5rem', marginTop: '100px', marginLeft: '300px', visibility: 'hidden', position: 'absolute' }} id='spinner' role="status"></div>
                            {
                                randomRoom && (<Card className='mt-3'>
                                    <CardBody>
                                        <Row className='d-flex'>
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
                                            <Divider vertical />
                                            <Col>
                                                <ul>
                                                    {
                                                        randomRoom.items?.map(item => (<li>{item.name}</li>))
                                                    }
                                                </ul>
                                                <Row className='mt-5'>
                                                    <Col xs='5'>
                                                        <Row>
                                                            <Col xs='5'><Label className='mt-2'>Amount</Label></Col>
                                                            <Col xs='7'><Input type='text' onChange={(e) => setPayAmount(e.target.value)} name='amount' value={payAmount} /></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs='7'>
                                                        <Button className='bg-primary w-100' onClick={() => bookNow()}>Book Now <i>{payAmount} AZN</i></Button>
                                                    </Col>
                                                </Row>
                                            </Col>

                                        </Row>
                                    </CardBody>
                                </Card>)
                            }
                        </Col>
                    </Row>
                    :
                    <CustomModal title='Info' setState={setExistsRoom} buttonValue='Add room' link={'/hotel/'+hotel.id+'/room/add'} message='No room please before add room'/>
            }

        </div>
    )
}
