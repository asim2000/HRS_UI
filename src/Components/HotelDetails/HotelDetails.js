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

export default function HotelDetails(props) {
    const {hotelId} = useParams()
    const navigate = useNavigate()
    const [hotel, setHotel] = useState({})
    const bookNow = ()=> {
        navigate('/payment')
    }
    useEffect(() => {
        let hotelService = new HotelService()
        hotelService.getHotelDetails(hotelId)
        .then(result=>{
            if(result.data.code === 200){
                setHotel(result.data.data)
            }else{
                alertify.error(result.data.message)
            }
        })
    },[])
    
    return (
        <div>
            <Button onClick={()=>navigate(-1)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Back</Button>
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
                                        <CardTitle className='pb-2' style={{fontSize:'20px'}}>
                                               {hotel.name} <br/>  
                                                <FaStar size='15' color='#0d6efd' />
                                                <FaStar size='15' color='#0d6efd' />
                                                <FaStar size='15' color='#0d6efd' />
                                                <FaStar size='15' color='#0d6efd' />
                                                <FaStar size='15' color='#0d6efd' />
                                            
                                        </CardTitle>
                                        <CardSubtitle className='pb-2'>Azerbaijan,{hotel.address?.city.name},{hotel.address?.addressLine}</CardSubtitle>
                                        <CardText>Starting from 200 Azn</CardText>
                                        <CardText>
                                            <Badge className='bg-primary'>8.7</Badge> <b>Excellent</b> 1823 review
                                        </CardText>
                                        <CardText className='mt-5'>
                                            <h5 className='pb-2'>Hotel services</h5>
                                            {
                                                hotel.services?.map(service=>(<p>{service.name}</p>))
                                            }
                                            {/* <AiOutlineWifi />&nbsp;&nbsp;Free Wifi <br />
                                            <MdFreeBreakfast />&nbsp;&nbsp;Free breakfast <br />
                                            <FaParking />&nbsp;&nbsp;Free parking */}
                                        </CardText>
                                        {/* <CardText>
                                                <h5>Amenities</h5>
                                             <p>
                                             <TiTick/> Baggage hold <br/>
                                             <TiTick/> Baggage hold <br/>
                                             <TiTick/> Baggage hold <br/>
                                             <TiTick/> Baggage hold <br/>
                                             </p>
                                            </CardText> */}
                                    </CardBody>
                                </Col>
                                <p className='p-3'>
                                    {hotel.description}
                                </p>
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mb-2' lg='4'>
                        <Form>
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        <FormGroup>
                                            <Label>Change Date</Label>
                                            <BootstrapDateRangePicker/>
                                        </FormGroup>

                                        <RoomSelectBox />

                                        <Button className='w-100' type='submit'>Search Room</Button>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

