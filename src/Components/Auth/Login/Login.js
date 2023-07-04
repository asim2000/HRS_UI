import { Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom/dist'
import { Col,Row } from 'reactstrap'
import TextInput from '../../../utilities/customFormControls/TextInput'
import { Button } from 'semantic-ui-react'
import AuthService from '../../../services/authService'
import alertifyjs from 'alertifyjs'
import * as Yup from "yup"

export default function Login(){
  const navigate = useNavigate()
  const initialValues = {}
  
  const  schema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const login = values => {
    const authService = new AuthService()
    authService.login(values)
    .then(result=>{
      navigate('/')
      alertifyjs.success(result.data.name + " successfully login")
    })
    .catch(error=>{
      alertifyjs.error(error.response.data.message)
    })
  }
    return (
      <div>
        <Row className='d-flex justify-content-center'>
          <Col lg='6' md='8' sm='10' xs='12'>
            <Formik
              initialValues={initialValues} 
              validationSchema={schema}
              onSubmit = {(values)=>{
                login(values)
              }}
            >
              <Form className="ui form">
                <TextInput name='email' placeholder='Enter Email'/>
                <TextInput name='password' placeholder='Enter password'/>
                <Link to='/forgot/password'>Forgot password?</Link><br/>
                <Button type='submit' className='mt-2' color='primary'>Login</Button>
              </Form>
            </Formik>
          </Col>
        </Row>
      </div>
    )
  }
