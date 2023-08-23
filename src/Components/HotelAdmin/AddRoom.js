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
import { AiOutlineArrowLeft } from 'react-icons/ai'

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
                navigate('/hotel/' + hotelId + '/rooms')
                alertify.success(result.message)
            }).catch(error => {
                alertify.error(error.message)
            })
    }
    useEffect(() => {
        const roomStyleService = new RoomStyleService()
        roomStyleService.getAll()
            .then(result => {
                setRoomStyles(result.data)
            }).catch(error => {
                alertify.error(error.message)
            })
        const itemService = new ItemService()
        itemService.getAll()
            .then(result => {
                setItems(result.data)
            }).catch(error => {
                alertify.error(error.message)
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
    return (
        <div>
            <Row>
                <Col>
                    <Button onClick={() => navigate(-1)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Back</Button>
                </Col>
                <Col>
                    <Button className='d-flex ms-auto' color='primary' onClick={() => navigate(`/hotel/${hotelId}/room/add`)}>Add Room</Button>
                </Col>
            </Row>
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
                            <CheckInput br={true} type='checkbox' name='itemIds' options={items.map(item => ({ value: item.id, text: item.name }))} />

                        </Col>
                    </Row>
                </Form>
            </Formik>
        </div>
    )
}
