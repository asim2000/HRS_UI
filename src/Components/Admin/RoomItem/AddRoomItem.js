import React, { useState } from 'react'
import TextInput from '../../../utilities/customFormControls/TextInput'
import { Button, Col, Input, Label, Row } from 'reactstrap'
import ServiceService from '../../../services/serviceService'
import { useNavigate } from 'react-router-dom'
import alertify from 'alertifyjs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import ItemService from '../../../services/itemService'

export default function AddRoomItem() {
    const [itemName, setItemName] = useState('')
    const navigate = useNavigate()
    const save = () => {
        const itemService = new ItemService();
        itemService.add(itemName)
            .then(result => {
                navigate('/admin/room-item/list')
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
                        <Label htmlFor='item'>Item Name</Label>
                        <Input name='item' onChange={(e) => setItemName(e.target.value)} id='item' placeholder='Enter room item' />
                        <Button className='mt-3 w-50' onClick={() => save()}>Save</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
