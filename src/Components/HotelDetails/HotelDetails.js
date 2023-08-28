import React, { Component, useEffect, useState } from 'react'
import { Badge, Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Col, CustomInput, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import HotelDetailCarousel from '../Carousel/HotelDetailCarousel'
import { FaStar } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { AiOutlineWifi } from 'react-icons/ai'
import { MdFreeBreakfast } from 'react-icons/md'
import { FaParking } from 'react-icons/fa'
import RoomSelectBox from '../RoomSelectBox/RoomSelectBox'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import alertify from 'alertifyjs'
import HotelService from '../../services/hotelService'
import BootstrapDateRangePicker from '../DateRangeBox/BootstrapDateRangePicker'
import { useDispatch, useSelector } from 'react-redux'
import RoomService from '../../services/roomService'
import { Divider, Select } from 'semantic-ui-react'
import RoomStyleService from '../../services/roomStyleService'
import SelectInput from '../../utilities/customFormControls/SelectInput'
import BaseSelectInput from '../../utilities/customFormControls/BaseSelectInput'
import { isAuthenticated } from '../../utilities/jwt/isAuthenticate'
import jwtDecode from 'jwt-decode'
import { getJwt } from '../../utilities/jwt/jwt'
import Math from '../../utilities/math/math'
import CustomMath from '../../utilities/math/math'

export default function HotelDetails(props) {
    const { hotelId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [hotel, setHotel] = useState({})
    const checkIn = useSelector(state => state.checkInReducer)
    const checkOut = useSelector(state => state.checkOutReducer)
    const adultCount = useSelector(state => state.adultReducer)
    const childreenCount = useSelector(state => state.childreenReducer)
    const roomCount = useSelector(state => state.roomReducer)
    const [randomRoom, setRandomRoom] = useState()
    const [roomStyles, setRoomStyles] = useState([])
    const [selectedRoomStyle, setSelectedRoomStyle] = useState('STANDART')
    const bookNow = () => {
        if (isAuthenticated()) {
            const {sub,roles} = jwtDecode(getJwt())
            console.log(roles)
            if(roles.includes('customer')){
                navigate(`/payment/${jwtDecode(getJwt()).sub}/${randomRoom.id}`)
            }
            else if(roles.includes('broker')){
                navigate(`/broker/${sub}/book/room/${randomRoom.id}`)
            }

            
        }
        else {
            navigate('/login')
            alertify.error('Zehmet olmasa once daxil olun.')
        }
    }
    useEffect(() => {
        let hotelService = new HotelService()
        hotelService.getHotelDetails(hotelId)
            .then(result => {
                setHotel(result.data)
            })
            .catch(error => {
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
    const searchRoom = () => {
        setRandomRoom(null)
        document.getElementById('spinner').style.visibility = 'visible'
        setTimeout(() => {
            const roomService = new RoomService()
            roomService.getRandomRoom({
                hotelId: hotelId,
                checkIn: checkIn,
                checkOut: checkOut,
                roomCount: roomCount,
                adultCount: adultCount,
                childreenCount: childreenCount,
                roomStyle: selectedRoomStyle
            }).then(result => {
                setRandomRoom(result.data)
                document.getElementById('spinner').style.visibility = 'hidden'
            }).catch(error => {
                alertify.error(error.message)
                document.getElementById('spinner').style.visibility = 'hidden'
            })
        }, 2000);

    }
    return (
        <div>
            <Button onClick={() => navigate(-1)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Back</Button>
            <Col>
                <Row className='mb-3'>
                    <Col className='mb-2' lg='8'>
                        <Card className='h-100'>
                            <Row>
                                <Col md='8'>
                                    <HotelDetailCarousel images={hotel.images} />
                                </Col>
                                <Col md='4'>
                                    <CardBody>
                                        <CardTitle className='pb-2' style={{ fontSize: '20px' }}>
                                            {hotel.name} <br />
                                            {Array.from(Array(hotel.star),()=>(<FaStar size='15' color='#0d6efd' />))}

                                        </CardTitle>
                                        <CardSubtitle className='pb-2'>Azerbaijan,{hotel.address?.city.name},{hotel.address?.addressLine}</CardSubtitle>
                                        <CardText>Starting from {hotel.minimumPrice} Azn</CardText>
                                        <CardText>
                                            <Badge className='bg-primary'>8.7</Badge> <b>Excellent</b> 1823 review
                                        </CardText>
                                        <CardText className='mt-5'>
                                            <ul>
                                                {
                                                    hotel.services?.map(service => (<li>{service.name}</li>))
                                                }
                                            </ul>
                                        </CardText>
                                    </CardBody>
                                </Col>
                                <div>
                                    <p className='p-3'>
                                        {hotel.description}
                                    </p>
                                    {
                                        randomRoom != null && (
                                            <p className='p-3'>{randomRoom.description}</p>
                                        )
                                    }
                                </div>
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mb-2' lg='4'>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <FormGroup>
                                        <Label>Change Date</Label>
                                        <BootstrapDateRangePicker />
                                    </FormGroup>
                                    <Label>Select Room Style</Label>
                                    <Select name='roomStyle' onChange={(e, { value }) => setSelectedRoomStyle(value)} className='w-100 mb-3' id='roomStyle' defaultValue={selectedRoomStyle} options={roomStyles?.map(roomStyle => ({ value: roomStyle, text: roomStyle, key: roomStyle }))} />
                                    <RoomSelectBox />

                                    <Button onClick={() => searchRoom()} className='w-100'>Search Room</Button>
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <div class="spinner-grow text-primary" style={{ width: '5rem', height: '5rem', marginTop: '50px', marginLeft: '150px', visibility: 'hidden', position: 'absolute' }} id='spinner' role="status">

                        </div>
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
                                            <Button className='bg-primary w-100' onClick={() => bookNow()}>Book Now <i>{new CustomMath().calculateTotalAmount(checkIn,checkOut,randomRoom.pricePerNight)} AZN</i></Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>)
                        }
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

