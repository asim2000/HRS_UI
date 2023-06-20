import React, { Component } from 'react'
import { Badge, Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Col, CustomInput, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import HotelDetailCarousel from '../Carousel/HotelDetailCarousel'
import { FaStar } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { AiOutlineWifi } from 'react-icons/ai'
import { MdFreeBreakfast } from 'react-icons/md'
import { FaParking } from 'react-icons/fa'
import RoomSelectBox from '../RoomSelectBox/RoomSelectBox'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import alertify from 'alertifyjs'

export default function HotelDetails() {
    const navigate = useNavigate()
    const bookNow = ()=> {
        navigate('/payment')
    }
    return (
        <div>
            <Button onClick={()=>navigate('/hotel/list')} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Back</Button>
            <Col>
                <Row className='mb-3'>
                    <Col className='mb-2' lg='8'>
                        <Card className='h-100'>
                            <Row>
                                <Col md='8'>
                                    <HotelDetailCarousel />
                                </Col>
                                <Col md='4'>
                                    <CardBody>
                                        <CardTitle>
                                            Hilton &nbsp;&nbsp;
                                            <FaStar size='15' color='#0d6efd' />
                                            <FaStar size='15' color='#0d6efd' />
                                            <FaStar size='15' color='#0d6efd' />
                                            <FaStar size='15' color='#0d6efd' />
                                            <FaStar size='15' color='#0d6efd' />
                                        </CardTitle>
                                        <CardSubtitle>Azerbaijan,Baku</CardSubtitle>
                                        <CardText>Starting from 200 Azn</CardText>
                                        <CardText>
                                            <Badge className='bg-primary'>8.7</Badge> <b>Excellent</b> 1823 review
                                        </CardText>
                                        <CardText className='mt-5'>
                                            <h5>Included for free</h5>
                                            <AiOutlineWifi />&nbsp;&nbsp;Free Wifi <br />
                                            <MdFreeBreakfast />&nbsp;&nbsp;Free breakfast <br />
                                            <FaParking />&nbsp;&nbsp;Free parking
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus minima facere non quos atque, voluptatem impedit quae eum quasi cum nostrum et, itaque voluptate voluptates, officia culpa est. Aliquam porro molestiae non? Nostrum, officia nihil minus ad reprehenderit optio inventore iste quod maxime debitis sapiente rerum, saepe consequuntur eum?
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
                                            <Input type="date" name="date" id="exampleDate" placeholder="Change Date" /><br />
                                        </FormGroup>

                                        <RoomSelectBox />

                                        <FormGroup>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Select floor</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </Input>
                                        </FormGroup><br />

                                        <Button className='w-100' type='submit'>Search</Button>
                                    </CardTitle>
                                    <hr />
                                    <CardText>
                                        <FormGroup check>
                                            <Input type="checkbox" />
                                            {' '}
                                            <Label check>
                                                Breakfast
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Input type="checkbox" />
                                            {' '}
                                            <Label check>
                                                Garage
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Input type="checkbox" />
                                            {' '}
                                            <Label check>
                                                Sauna
                                            </Label>
                                        </FormGroup>
                                    </CardText>
                                    <CardSubtitle>
                                        Total 250 Azn
                                    </CardSubtitle>
                                    <CardFooter>
                                        <Button onClick={()=>bookNow()} className='w-100' type='submit' color='primary'>Book Now</Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

