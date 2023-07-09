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
    const [target, setTarget] = useState()
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
        serviceIds:[]
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

      const form = document.getElementById("formid")
      if(form){
        form.onsubmit = e => {
            e.preventDefault()
            setTarget(e.target)
          }
      }

    const save = e => {
        let hotelService = new HotelService()
        console.log(target)
                    const formData = new FormData(target)
                hotelService.create(formData)
                .then(result=>{
                    console.log(result)
                    //navigate('/hotel/list')
                    alertify.success('Successfully created hotel')
                })
                .catch(error=>{
                    console.log(error)
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
            {(formik)=>{
                return(
               
        <Form className="ui form" id='formid' encType='multipart/form-data'>
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
                        <Input type='file' multiple name='images' id='images' onChange={event=> formik.setFieldValue("images",event.target.files)} placeholder='Choose hotel images' />
                        
                    </FormGroup>
                    {/* {images?<img width='100px' height='100px' src={URL.createObjectURL(images)} />:null } */}
                </Col>
            </Row>
           
                    </Form>
                    )
            }}
                    </Formik>
        </div>
    )
}

