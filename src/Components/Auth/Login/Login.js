import { Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom/dist'
import { Col, Row } from 'reactstrap'
import TextInput from '../../../utilities/customFormControls/TextInput'
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import * as authServices from '../../../services/authService'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { setJwt } from '../../../utilities/jwt/jwt'
import alertify from 'alertifyjs'
import { instance } from '../../../api/utils'

export default function Login() {
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: ""
  }

  const schema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required")
  });
  // const login = values => {
  //   const authService = new AuthService()
  //   authService.login(values)
  //     .then(result => {
  //          if(result.data.code === 200){
  //           setJwt(result.data.data)
  //           axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.data}`
  //           const user = jwtDecode(result.data.data)
  //           if(user.roles[0] === 'customer')
  //             navigate(-1)
  //           else if(user.roles[0] === 'hotel')
  //             navigate(`/hotel/admin/${user.sub}`)
  //           alertifyjs.success(result.data.message)
  //         }
  //         else{
  //           alertifyjs.error("<pre>"+result.data.message+"</pre>")
  //         }
  //     })
  //     .catch(error=>{
  //       console.error(error)
  //     })
  // }
  const login = values => {
    authServices.login(values)
    .then(result => {
      setJwt(result.data)
      axios.defaults.headers.common['Authorization'] = `Bearer ${result.data}`
      const user = jwtDecode(result.data)
      if (user.roles[0] === 'customer')
          navigate(-1)
      else if (user.roles[0] === 'hotel')
          navigate(`/hotel/admin/${user.sub}`)
      alertify.success(result.message)
  })
  }
  return (
    <div>
      <Row className='d-flex justify-content-center'>
        <Col lg='6' md='8' sm='10' xs='12'>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              login(values)
            }}
          >
            <Form className="ui form">
              <TextInput name='email' placeholder='Enter Email' />
              <TextInput type="password" name='password' placeholder='Enter password' />
              <Link to='/forgot/password'>Forgot password?</Link><br />
              <Button type='submit' className='mt-2' color='primary'>Login</Button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </div>
  )
}
