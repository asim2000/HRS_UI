import React, { useEffect, useState } from 'react'
import ServiceService from '../../../services/serviceService'
import alertify from 'alertifyjs'
import { Button, Col, Row, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import ItemService from '../../../services/itemService'

export default function ListRoomItem() {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const itemService = new ItemService()
        itemService.getAll()
        .then(result=>{
            if(result.data.code === 200){
                setItems(result.data.data)
            }else{
                alertify(result.data.message)
            }
        })
    }, [])
    
  return (
    <Row>
        <Col>
        <Row>
            <Col>
              <Button onClick={()=>navigate('/admin/room-item/add')}>Add Room Item</Button>
            </Col>
        </Row>
        <Row>
              <Col>
              {
                items.length === 0
                ? <h5>No Room Items</h5>
                :<Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Service Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {
                  items.map((item,index)=>(
                    <tr>
                        <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>
                        <AiFillEdit title='edit' color='blue'/>
                        <GiCancel color='red' title='cancel' className='ms-3'/>
                    </td>
                  </tr>
                  ))
                }
                </tbody>
              </Table>
              }
               </Col>
            </Row>
        </Col>
    </Row>
  )
}
