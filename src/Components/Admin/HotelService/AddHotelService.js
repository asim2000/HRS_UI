import React, { useState } from 'react'
import TextInput from '../../../utilities/customFormControls/TextInput'
import { Button, Col, Input, Label, Row } from 'reactstrap'
import ServiceService from '../../../services/serviceService'
import { useNavigate } from 'react-router-dom'
import alertify from 'alertifyjs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function AddHotelService() {
    const [serviceName, setServiceName] = useState('')
    const navigate = useNavigate()
    const save = () => {
        const serviceService = new ServiceService();
        serviceService.add(serviceName)
            .then(result => {
                navigate('/admin/hotel-service/list')
            }).catch(error => {
                alertify.error(error.message)
            })
    }
    return (
        <Row>
            <Col>
                <Row>
                    <Col xs='6'>
                        <Button onClick={() => navigate(-1)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Back</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs='6'>
                        <Label htmlFor='service'>Service Name</Label>
                        <Input name='service' onChange={(e) => setServiceName(e.target.value)} id='service' placeholder='Enter room service' />
                        <Button className='mt-3 w-50' onClick={() => save()}>Save</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
