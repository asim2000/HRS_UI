import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import alertify from 'alertifyjs'
import RoomStyleService from '../../services/roomStyleService'
import ItemService from '../../services/itemService'
import { Form, Formik } from 'formik'
import TextInput from '../../utilities/customFormControls/TextInput'
import CheckInput from '../../utilities/customFormControls/CheckInput'
import * as Yup from "yup"
import SelectInput from '../../utilities/customFormControls/SelectInput'
import RoomService from '../../services/roomService'

export default function AddRoom() {
    const navigate = useNavigate()
    const { hotelId } = useParams()
    const [roomStyles, setRoomStyles] = useState([])
    const [items, setItems] = useState([])
    const save = (values) => {
        const roomService = new RoomService()
        values.hotelId = hotelId
        roomService.create(values)
            .then(result => {
                if (result.data.code === 200) {
                    navigate('/hotel/'+hotelId+'/rooms')
                    alertify.success(result.data.message)
                } else {
                    alertify.error(result.data.message)
                }
            })



    }
    useEffect(() => {
        const roomStyleService = new RoomStyleService()
        roomStyleService.getAll()
            .then(result => {
                if (result.data.code === 200) {
                    setRoomStyles(result.data.data)
                } else {
                    alertify.error(result.data.message)
                }
            })
        const itemService = new ItemService()
        itemService.getAll()
            .then(result => {
                if (result.data.code === 200) {
                    setItems(result.data.data)
                } else {
                    alertify.error(result.data.message)
                }
            })
    }, [])

    const initialValues = {
        roomNumber: '',
        roomStyle: '',
        floor: '',
        roomCount: '',
        adultCount: '',
        childreenCount: '',
        twinBedCount: '',
        singleBedCount: '',
        isPetAllowed: 'true',
        pricePerNight: '',
        showerCount: '',
        roomSize: '',
        description: ''
    }

    const schema = Yup.object({
        roomNumber: Yup.string().required(),
        roomStyle: Yup.string().required(),
        floor: Yup.number().required(),
        roomCount: Yup.number().required(),
        adultCount: Yup.number().required(),
        childreenCount: Yup.number().required(),
        twinBedCount: Yup.number().required(),
        singleBedCount: Yup.number().required(),
        isPetAllowed: Yup.boolean().required(),
        pricePerNight: Yup.number().required(),
        showerCount: Yup.number().required(),
        roomSize: Yup.number().required(),
        description: Yup.string()
    });
    const petSelectBox = [
        { value: true, text: 'Yes' },
        { value: false, text: 'No' }
    ]
    // const changeBreakfastInput = () => {
    //     const feeForBreakfast = document.getElementById('feeForBreakfast')
    //     const optional = document.getElementById('optional')
    //     if (optional.selected) {
    //         feeForBreakfast.style.visibility = 'visible'
    //     } else {
    //         feeForBreakfast.style.visibility = 'hidden'
    //     }
    // }
    // const changeParkingInput = ()=> {
    //     const parkingPaid = document.getElementById('parkingPaid')
    //     const feeForParking = document.getElementById('feeForParking')
    //     if(parkingPaid.selected){
    //         feeForParking.style.visibility="visible"
    //     }else{
    //         feeForParking.style.visibility="hidden"
    //     }
    // }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                validateOnMount={true}
                onSubmit={(values) => {
                    save(values)
                }}
            >
                <Form className='form ui'>
                    <Row>
                        <Col md='6'>
                            <TextInput name='roomNumber' id='roomNumber' placeholder='Enter room number' />
                            <SelectInput name='roomStyle' id='roomStyle' defaultValue='Select room style' options={roomStyles.map(roomStyle => ({ value: roomStyle, text: roomStyle }))} />
                            <TextInput name='floor' id='floor' placeholder='Enter floor' />
                            <TextInput name='roomCount' id='roomCount' placeholder='Enter room count' />
                            <TextInput name='roomSize' id='roomSize' placeholder='Enter room size' />
                            <TextInput name='showerCount' id='showerCount' placeholder='Enter shower count' />
                            <TextInput name='adultCount' id='adultCount' placeholder='Enter adult count' />
                            <TextInput name='childreenCount' id='childreenCount' placeholder='Enter childreen count' />
                            <TextInput name='twinBedCount' id='twinBedCount' placeholder='Enter twin bed count' />
                            <TextInput name='singleBedCount' id='singleBedCount' placeholder='Enter single bed count' />
                            <CheckInput type='radio' labelValue='Do you allow pets?' name='isPetAllowed' options={petSelectBox.map(item => ({ value: item.value, text: item.text }))} />
                            <TextInput name='pricePerNight' id='pricePerNight' placeholder='Enter price per night (Azn)' />
                            <TextInput name='description' id='description' placeholder='Enter description' />
                            <Button type='submit' color='primary'>Add Room</Button>
                        </Col>
                        <Col md='6'>
                            <CheckInput type='checkbox' name='itemIds' options={items.map(item => ({ value: item.id, text: item.name }))} />
                            {/* <FormGroup>
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
                        </FormGroup> */}

                        </Col>
                    </Row>
                </Form>
            </Formik>
        </div>
    )
}
