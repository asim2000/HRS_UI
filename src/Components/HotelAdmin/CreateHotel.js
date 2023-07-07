import React, { Component, useEffect, useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import alertify from 'alertifyjs'
import { Field, Form, Formik } from 'formik'
import TextInput from '../../utilities/customFormControls/TextInput'
import CheckInput from '../../utilities/customFormControls/CheckInput'
import ServiceService from '../../services/serviceService'
import * as Yup from "yup"
import CityService from '../../services/cityService'
import SelectInput from '../../utilities/customFormControls/SelectInput'
import HotelService from '../../services/hotelService'

export default function CreateHotel() {
    const navigate = useNavigate()
    const [cities, setCities] = useState([])
    const [services, setServices] = useState([])
    const [images, setImages] = useState()
    useEffect(()=>{
        let cityService = new CityService();
        let serviceService = new ServiceService();

        cityService.getCities()
        .then(result=>setCities(result.data));

        serviceService.getServices()
        .then(result=>setServices(result.data))
    
      },[])
    const initialValues = { 
        name:"",
        cityId:0,
        addressLine:"",
        phone:"",
        description:"",
        serviceIds:[],
        images:{}
      }
      
      const schema = Yup.object({
        // name:Yup.string().required(),
        // cityId:Yup.number().required(),
        // addressLine:Yup.string().required(),
        // phone:Yup.string().required(),
        // description:Yup.string().required(),
        // serviceIds:Yup.array(),
        // images:Yup.array()
       
      });
    const save = (hotel)=> {
        const formdata = new FormData()
        formdata.append('photo',images)
        hotel.images=formdata
        console.log(hotel)
        let hotelService = new HotelService()
        hotelService.create(hotel)
        .then(result=>{
            //navigate('/hotel/list')
            alertify.success('Successfully created hotel')
        })
        .catch(error=>{
            console.log(error)
            alertify.error(error.response.data)
        })
        
    }
    return (
        <div>
            <Formik
          initialValues={initialValues} 
          validationSchema={schema}
          validateOnMount={true}
          onSubmit = {(values)=>{
            save(values)
          }}
        >
            
        <Form className="ui form">
            <h1>Create Hotel</h1><hr/>
            <Row>
                <Col md='6'>
                    <TextInput name='name' id='name' placeholder='Enter name'/>
                    <SelectInput name='cityId' id='cityId' defaultValue='Choose city' options={cities.map(city=>({value:city.id,text:city.name}))}/>
                    <TextInput name='addressLine' id='addressLine' placeholder='Enter address'/>
                    <TextInput name='phone' id='phone' placeholder='Enter phone'/>
                    <TextInput name='description' id='description' placeholder='Enter description'/>   
                    <Button type='submit' color='primary'>Save</Button>
                </Col>
                <Col md='6'>
                    <h5>Services</h5>
                    <CheckInput name='serviceIds' type='checkbox' options={services.map(service=>({value:service.id,text:service.name}))} />
                    
                    <FormGroup className='mt-5'>
                        <Label for='images'>Select Images</Label>
                        <Input type='file' name='images' id='images' onChange={event=>setImages(event.currentTarget.files[0])} placeholder='Choose hotel images' />
                    </FormGroup>
                </Col>
            </Row>
                    </Form>
                    </Formik>
        </div>
    )
}

