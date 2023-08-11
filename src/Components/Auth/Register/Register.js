import { Link, useNavigate } from 'react-router-dom'
import { Button, Col} from 'reactstrap'
import React, { useEffect, useReducer, useState } from 'react'
import CityService from '../../../services/cityService'
import TextInput from '../../../utilities/customFormControls/TextInput'
import { Formik,Form, validateYupSchema } from 'formik'
import * as Yup from "yup"
import alertifyjs from 'alertifyjs'
import * as authServices from '../../../services/authService'
import SelectInput from '../../../utilities/customFormControls/SelectInput'
import customerTypeReducer from '../../../redux/reducers/customerTypeReducer'
import { useSelector } from 'react-redux'
import GenderService from '../../../services/genderService'
import alertify from 'alertifyjs'
import axios from 'axios'

export default function Register() {
  const [cities, setSities] = useState([])
  const [genders,setGenders] = useState([])
  const navigate = useNavigate()
  const customerType = useSelector(state=>state.customerTypeReducer)
  useEffect(()=>{
    let cityService = new CityService();
    let genderService = new GenderService();

    const headers = {
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
    cityService.getCities(headers)
    .then(result=>{
      if(result.data.code === 200){
        setSities(result.data.data)
      }else{
        alertify.error(result.data.message)
      }
    });

    genderService.getGenders(headers)
    .then(result=>{
      if(result.data.code === 200){
        setGenders(result.data.data)
      }
      else{
        alertify.error(result.data.message)
      }
    })


  },[])

  const initialValues = { 
    role:customerType,
    name:"",
    surname:"",
    phone:"",
    email:"",
    password:"",
    gender:"",
    cityId:"",
    addressLine:"",
    dateOfBirth:""
  }
  
  const schema = Yup.object({
    name: Yup.string().required("Name is required").default(true),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    phone: Yup.string().required("Phone is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    cityId: Yup.string().required("City is required"),
    addressLine: Yup.string().required("Address is required")
  });
  
  const register = values => {
    authServices.register(values)
    .then(result=>{
      if(result.data.code === 200){
        navigate('/login')
      alertifyjs.success(result.data.message)
      }else{
        alertifyjs.error(result.data.message)
      }
  })
  }
  return (
    <div>
      <Col md="6">
        <Formik
          initialValues={initialValues} 
          validationSchema={schema}
          validateOnMount={true}
          onSubmit = {(values)=>{
            register(values)
          }}
        >
            <Form className="ui form">
            <TextInput type='text' name="name" placeholder="Enter name"/>
            <TextInput type='text' name="surname" placeholder="Enter surname"/>
            <TextInput type='email' name="email" placeholder="Enter email"/>
            <TextInput type='password' name="password" placeholder="Enter password"/>
            <TextInput type='text' name="phone" placeholder="Enter phone"/>
            <TextInput type='date' name="dateOfBirth" placeholder="Enter date of birth"/>
            <SelectInput name='gender' defaultValue='Choose gender' options={genders.map(gender=>({value:gender,text:gender}))}/>
            <SelectInput name='cityId' defaultValue='Choose city' options={cities.map(city=>({value:city.id,text:city.name}))}/>
            <TextInput type='text' name="addressLine" placeholder="Enter address"/>
            <TextInput type='hidden' name="role"/>
            <Button type='submit' color='primary'>Register</Button>
          </Form>
        </Formik>
      </Col>
    </div>
  )
}
