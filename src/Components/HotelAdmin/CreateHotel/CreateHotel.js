import React, { Component, useEffect, useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import alertify from 'alertifyjs'
import { Field, Form, Formik } from 'formik'
import TextInput from '../../../utilities/customFormControls/TextInput'
import CheckInput from '../../../utilities/customFormControls/CheckInput'
import ServiceService from '../../../services/serviceService'
import * as Yup from "yup"
import CityService from '../../../services/cityService'
import SelectInput from '../../../utilities/customFormControls/SelectInput'
import HotelService from '../../../services/hotelService'

export default function CreateHotel() {
    const navigate = useNavigate()
    const { adminId } = useParams()
    const [cities, setCities] = useState([])
    const [services, setServices] = useState([])
    const [target, setTarget] = useState()
    const [images, setImages] = useState([])
    const [selectedImg, setSelectedImg] = useState('')
    useEffect(() => {
        let cityService = new CityService();
        let serviceService = new ServiceService();

        cityService.getCities()
            .then(result => {
                setCities(result.data)
            }).catch(error => {
                alertify.error(error.message)
            })

        serviceService.getServices()
            .then(result => {
                setServices(result.data)
            }).catch(error => {
                alertify.error(error.message)
            })

    }, [])
    const initialValues = {
        name: "",
        cityId: "",
        addressLine: "",
        phone: "",
        description: "",
        serviceIds: [],
        star:''
    }

    const schema = Yup.object({
        name: Yup.string().required(),
        cityId: Yup.number().required(),
        addressLine: Yup.string().required(),
        phone: Yup.string().required(),
        description: Yup.string(),
        serviceIds: Yup.array().min(1, 'Please select service').required(),
        star:Yup.number().max(10).required()
    });

    const form = document.getElementById("formid")
    if (form) {
        form.onsubmit = e => {
            e.preventDefault()
            setTarget(e.target)
        }
    }

    const save = e => {
        let hotelService = new HotelService()
        const formData = new FormData(target)
        hotelService.create(formData)
            .then(result => {
                    navigate('/hotel/admin/' + adminId)
                    alertify.success(result.message)
            }).catch(error => {
                alertify.error(error.message)
            })
    }
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
                {(formik) => {
                    return (

                        <Form className="ui form" id='formid' encType='multipart/form-data'>
                            <h1>Create Hotel</h1><hr />
                            <Row>
                                <Col md='6'>
                                    <input type='hidden' name='personId' value={adminId} />
                                    <TextInput name='name' id='name' placeholder='Enter name' />
                                    <TextInput type='number' name='star' id='star' placeholder='Enter star'/>
                                    <SelectInput name='cityId' id='cityId' defaultValue='Choose city' options={cities.map(city => ({ value: city.id, text: city.name }))} />
                                    <TextInput name='addressLine' id='addressLine' placeholder='Enter address' />
                                    <TextInput name='phone' id='phone' placeholder='Enter phone' />
                                    <TextInput name='description' id='description' placeholder='Enter description' />
                                    <Button type='submit' color='primary'>Save</Button>
                                </Col>
                                <Col md='6'>
                                    <CheckInput labelValue='Select Services' name='serviceIds' br={true} type='checkbox' options={services.map(service => ({ value: service.id, text: service.name }))} />

                                    <FormGroup className='mt-5'>
                                        <Label for='images'>Select Images</Label>
                                        <Input type='file' required multiple name='images' id='images' onChange={event => { setImages(event.target.files); setSelectedImg(Array.from(event.target.files)[0].name) }} placeholder='Choose hotel images' />

                                    </FormGroup>
                                    {images.length !== 0 ? <div><Label>Select main image</Label><br /></div> : null}
                                    {Array.from(images).map(image => <img width='100px' onClick={event => setSelectedImg(image.name)} height='100px' style={{ border: selectedImg === image.name ? 'solid 1px blue' : '', marginRight: '10px' }} src={URL.createObjectURL(image)} />)}
                                    <input type='hidden' name='mainImageName' id='mainImageName' value={selectedImg} />
                                </Col>
                            </Row>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

