import React, { useEffect, useState } from 'react'
import HotelService from '../../../services/hotelService'
import alertify from 'alertifyjs'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function HotelReport() {
  const [hotel, setHotel] = useState({})
  const [other, setOther] = useState({})
  const {hotelId} = useParams()
  const navigate = useNavigate()
    useEffect(() => {
        const hotelService = new HotelService()
        hotelService.getReportOfHotel(hotelId)
        .then(result=>{
          setHotel(result.data.hotel)
          setOther(result.data.other)
          console.log(result)
        }).catch(error=>{
          alertify.error(error.message)
        })
    }, [])
    
  return (
    <div>
       <Row>
                <Col>
                    <Button onClick={() => navigate(-1)} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Back</Button>
                </Col>
            </Row>
      <Row>
      <Col>
      <Button style={{width:'150px',marginRight:'20px'}}>Daily</Button>
      <Button style={{width:'150px',marginRight:'20px'}}>Monthly</Button>
      <Button style={{width:'150px',marginRight:'20px'}}>Yearly</Button>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col xs='3'>
      <Table>
          <thead>
          <tr>
            <th>#</th>
            <th>Reserve Count</th>
            <th>Total Profit</th>
            <th>Net Profit</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Hotel</th>
            <td>{hotel.reserveCount}</td>
            <td>{hotel.totalProfit}</td>
            <td>{hotel.netProfit}</td>
          </tr>
          <tr>
            <th>Other</th>
            <td>{other.reserveCount}</td>
            <td>{other.totalProfit}</td>
            <td>{other.netProfit}</td>
          </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    </div>

  )
}
