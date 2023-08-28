import { useNavigate } from 'react-router-dom'
import { Button, Col, Input, Row } from 'reactstrap'
import React, { useEffect, useState } from 'react'
import CityService from '../../../services/cityService'
import TextInput from '../../../utilities/customFormControls/TextInput'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import alertifyjs from 'alertifyjs'
import SelectInput from '../../../utilities/customFormControls/SelectInput'
import { useSelector } from 'react-redux'
import GenderService from '../../../services/genderService'
import alertify from 'alertifyjs'
import AuthService from '../../../services/authService'

export default function Register() {
  const [cities, setCities] = useState([])
  const [genders, setGenders] = useState([])
  const [image, setImage] = useState()
  const [target, setTarget] = useState()
  const navigate = useNavigate()
  const customerType = useSelector(state => state.customerTypeReducer)
  useEffect(() => {
    let cityService = new CityService();
    let genderService = new GenderService();

    cityService.getCities()
      .then(result => {
        setCities(result.data)
      }).catch(error => {
        alertify.error(error.message)
      })

    genderService.getAll()
      .then(result => {
        setGenders(result.data)
      }).catch(error => {
        alertify.error(error.message)
      })


  }, [])

  const form = document.getElementById("formid")
  if (form) {
    form.onsubmit = e => {
      e.preventDefault()
      setTarget(e.target)
    }
  }

  const initialValues = {
    role: customerType,
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    cityId: "",
    addressLine: "",
    dateOfBirth: ""
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
    const formData = new FormData(target)
    const authService = new AuthService()
    authService.register(formData)
      .then(result => {
        navigate('/login')
        alertifyjs.success(result.message)
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
              register(values)
            }}
          >
            <Form className="ui form" id='formid'>
      <Row>
        <Col md="6">
              <TextInput type='text' name="name" placeholder="Enter name" />
              <TextInput type='text' name="surname" placeholder="Enter surname" />
              <TextInput type='email' name="email" placeholder="Enter email" />
              <TextInput type='password' name="password" placeholder="Enter password" />
              <TextInput type='text' name="phone" placeholder="Enter phone" />
              <TextInput type='text' name="addressLine" placeholder="Enter address" />
              <TextInput type='hidden' id='role' value={customerType} name="role" />
          <Button type='submit' className='mt-3' color='primary'>Register</Button>
        </Col>
        <Col md="6">
          <TextInput type='date' name="dateOfBirth" placeholder="Enter date of birth" />
          <SelectInput name='gender' defaultValue='Choose gender' options={genders.map(gender => ({ value: gender, text: gender }))} />
          <SelectInput name='cityId' defaultValue='Choose city' options={cities.map(city => ({ value: city.id, text: city.name }))} />
          <Input type='file' name='image' id='image' onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} required />
          <img className='mt-2 d-block' height='100' src={image}/>
        </Col>
      </Row>
        </Form>
          </Formik>
    </div>
  )
}
