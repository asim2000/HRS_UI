import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import alertify from 'alertifyjs'

export default function AddRoom() {
    const navigate = useNavigate()
    const save = ()=> {
        navigate('/hotel/rooms')
        alertify.success('Successfully added room.')
    }
    const changeBreakfastInput = () => {
        const feeForBreakfast = document.getElementById('feeForBreakfast')
        const optional = document.getElementById('optional')
        if (optional.selected) {
            feeForBreakfast.style.visibility = 'visible'
        } else {
            feeForBreakfast.style.visibility = 'hidden'
        }
    }
    const changeParkingInput = ()=> {
        const parkingPaid = document.getElementById('parkingPaid')
        const feeForParking = document.getElementById('feeForParking')
        if(parkingPaid.selected){
            feeForParking.style.visibility="visible"
        }else{
            feeForParking.style.visibility="hidden"
        }
    }
    return (
        <div>
            <Form>
                <Row>
                    <Col md='6'>
                        <FormGroup>
                            <Label for='name'>Room Number</Label>
                            <Input type='text' name='name' id='name' placeholder='Enter hotel name' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Room Type</Label>
                            <Input type='text' name='type' id='name' placeholder='Enter room type' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='floor'>Floor</Label>
                            <Input type='text' name='floor' id='floor' placeholder='Enter floor' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='address'>Room Count</Label>
                            <Input type='text' name='address' id='address' placeholder='Enter address line' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='adultCount'>Adult Count</Label>
                            <Input type='text' name='adultCount' id='adultCount' placeholder='Enter adult count' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='childreenCount'>Childreen Count</Label>
                            <Input type='text' name='childreenCount' id='childreenCount' placeholder='Enter childreen count' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='twinBedCount'>Twin Bed Count</Label>
                            <Input type='text' name='twinBedCount' id='twinBedCount' placeholder='Enter twin bed count' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='singleBedCount'>Single Bed Count</Label>
                            <Input type='text' name='singleBedCount' id='singleBedCount' placeholder='Enter single bed count' />
                        </FormGroup>
                        <FormGroup>
                            <Label>Do you allow pets?</Label>
                            <Input type='select'>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='price'>Price Per Night</Label>
                            <InputGroup>
                                <InputGroupText>Azn/per night</InputGroupText>
                                <Input type='text' name='price' id='price' placeholder='Enter price per night' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for='image'>Image</Label>
                            <Input type='file' name='image' id='image' placeholder='Choose hotel image' />
                        </FormGroup>
                        <Button onClick={() => save()} color='primary'>Save</Button>
                    </Col>
                    <Col md='6'>
                        <FormGroup>
                            <Label for='breakfast'>Breakfast</Label>
                            <Input onChange={() => changeBreakfastInput()} id='breakfast' name='breakfast' type='select'>
                                <option selected>No</option>
                                <option value='0'>Yes,it's included in the price</option>
                                <option id='optional'>Yes,it's optional</option>
                            </Input>
                            <InputGroup id='feeForBreakfast' style={{ visibility: 'hidden' }} className='mt-3'>
                                <InputGroupText>Azn/per day</InputGroupText>
                                <Input placeholder='Enter fee for breakfast' />
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label for='breakfast'>Parking</Label>
                            <Input onChange={() => changeParkingInput()} id='parking' name='parking' type='select'>
                                <option selected>No</option>
                                <option value='0'>Yes,free</option>
                                <option id='parkingPaid'>Yes,paid</option>
                            </Input>
                            <InputGroup id='feeForParking' style={{ visibility: 'hidden' }} className='mt-3'>
                                <InputGroupText>Azn/per day/per guest</InputGroupText>
                                <Input placeholder='Enter fee for parking' />
                            </InputGroup>
                        </FormGroup>

                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Smoking</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Kitchen</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Bathroom</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Air Conditioner</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Sofa</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Table</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>TV</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Wifi</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Balcony</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Terras</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Electric kettle</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Iron</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            <Label check>Hairdryer</Label>
                        </FormGroup>
                        <FormGroup className='mt-5'>
                            <Label>How many days in advance can guests cancel free of charge?</Label>
                            <Input type='select'>
                                <option>Day of arrival(6pm)</option>
                                <option>1 days</option>
                                <option>2 days</option>
                                <option>3 days</option>
                                <option>7 days</option>
                                <option>14 days</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className='mt-5'>
                            <Label>Or guests will pay 100%</Label>
                            <Input type='select'>
                                <option>of the first night</option>
                                <option>of the full stay</option>
                            </Input>
                        </FormGroup>

                    </Col>
                </Row>
            </Form>
        </div>
    )
}
