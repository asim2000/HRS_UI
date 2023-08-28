import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import alertify from 'alertifyjs'
import RoomStyleService from '../../services/roomStyleService'
import ItemService from '../../services/itemService'
import {  Form, Formik } from 'formik'
import TextInput from '../../utilities/customFormControls/TextInput'
import CheckInput from '../../utilities/customFormControls/CheckInput'
import * as Yup from "yup"
import SelectInput from '../../utilities/customFormControls/SelectInput'
import RoomService from '../../services/roomService'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function AddRoom() {
   
    const initialValues = {
      name:''
    }

    const schema = Yup.object({
        name:Yup.string().required()
    });
    return (
        <div>
           
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                validateOnMount={true}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='form ui'>
                            <TextInput name='name' id='name' placeholder='Enter room number' />
                            <Button className='mt-3' type='submit' color='primary'>Add Room</Button>
                </Form>
            </Formik>
        </div>
    )
}
