import React, { useEffect, useState } from 'react'
import ServiceService from '../../../services/serviceService'
import alertify from 'alertifyjs'
import { Button, Col, Row, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'

export default function ListHotelService() {
    const [services, setServices] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const serviceService = new ServiceService()
        serviceService.getServices()
        .then(result=>{
            setServices(result.data)
        }).catch(error=>{
          alertify.error(error.message)
        })
    }, [])
    
  return (
    <Row>
        <Col>
        <Row>
            <Col>
              <Button onClick={()=>navigate('/admin/hotel-service/add')}>Add Service</Button>
            </Col>
        </Row>
        <Row>
              <Col>
              {
                services.length === 0
                ? <h5>No Service</h5>
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
                  services.map((service,index)=>(
                    <tr>
                        <td>{index+1}</td>
                    <td>{service.name}</td>
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
