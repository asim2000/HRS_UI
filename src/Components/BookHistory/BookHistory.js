import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Input, InputGroup, Row, Table } from 'reactstrap'
import {AiFillEdit} from 'react-icons/ai'
import {GiCancel} from 'react-icons/gi'
export default function BookHistory() {
    const navigate = useNavigate()
    return (
        <div>
            <Row>
                <Col>
                    <h5>Bookings</h5>
                </Col>
                <Col>
                    <Button className='d-flex ms-auto' color='primary' onClick={() => navigate('/hotel/list')}>New Book</Button>
                </Col>
            </Row>
            <Row className='mt-3 mb-5'>
                <Col>
                    <Button>All</Button>&nbsp;
                    <Button>Confirmed</Button>&nbsp;
                    <Button>Pending payment</Button>&nbsp;
                </Col>
                <Col>
                    <InputGroup className='d-flex ms-auto' style={{width:"350px"}}>
                        <Input type='text' className='d-flex ms-auto'/>
                        <Button>Search booking</Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
              <Col>
              <Table>
        <thead>
          <tr>
            <th>Hotel name</th>
            <th>Address</th>
            <th>Status</th>
            <th>Check-In/Check-Out</th>
            <th>Guests</th>
            <th>Price</th>
            <th>Accommodation</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Hilton</td>
            <td>Azerbaijan,Baku</td>
            <td>Comfirmed</td>
            <td>Nov 1 - Nov 11<br/><i style={{color:'red'}}>10 night</i></td>
            <td>2 Adults</td>
            <td>500 Azn</td>
            <td>Comfort</td>
            <td>2023/20/6</td>
            <td>
                <AiFillEdit title='edit' color='blue'/>
                <GiCancel color='red' title='cancel' className='ms-3'/>
            </td>
          </tr>
          <tr>
            <td>Hilton</td>
            <td>Azerbaijan,Baku</td>
            <td>Comfirmed</td>
            <td>Nov 1 - Nov 11<br/><i style={{color:'red'}}>10 night</i></td>
            <td>2 Adults</td>
            <td>500 Azn</td>
            <td>Comfort</td>
            <td>2023/20/6</td>
            <td>
                <AiFillEdit title='edit' color='blue'/>
                <GiCancel color='red' title='cancel' className='ms-3'/>
            </td>
          </tr>
          <tr>
            <td>Hilton</td>
            <td>Azerbaijan,Baku</td>
            <td>Comfirmed</td>
            <td>Nov 1 - Nov 11<br/><i style={{color:'red'}}>10 night</i></td>
            <td>2 Adults</td>
            <td>500 Azn</td>
            <td>Comfort</td>
            <td>2023/20/6</td>
            <td>
                <AiFillEdit title='edit' color='blue'/>
                <GiCancel color='red' title='cancel' className='ms-3'/>
            </td>
          </tr>
          <tr>
            <td>Hilton</td>
            <td>Azerbaijan,Baku</td>
            <td>Comfirmed</td>
            <td>Nov 1 - Nov 11<br/><i style={{color:'red'}}>10 night</i></td>
            <td>2 Adults</td>
            <td>500 Azn</td>
            <td>Comfort</td>
            <td>2023/20/6</td>
            <td>
                <AiFillEdit title='edit' color='blue'/>
                <GiCancel color='red' title='cancel' className='ms-3'/>
            </td>
          </tr>
          <tr>
            <td>Hilton</td>
            <td>Azerbaijan,Baku</td>
            <td>Comfirmed</td>
            <td>Nov 1 - Nov 11<br/><i style={{color:'red'}}>10 night</i></td>
            <td>2 Adults</td>
            <td>500 Azn</td>
            <td>Comfort</td>
            <td>2023/20/6</td>
            <td>
                <AiFillEdit title='edit' color='blue'/>
                <GiCancel color='red' title='cancel' className='ms-3'/>
            </td>
          </tr>
          <tr>
            <td>Hilton</td>
            <td>Azerbaijan,Baku</td>
            <td>Comfirmed</td>
            <td>Nov 1 - Nov 11<br/><i style={{color:'red'}}>10 night</i></td>
            <td>2 Adults</td>
            <td>500 Azn</td>
            <td>Comfort</td>
            <td>2023/20/6</td>
            <td>
                <AiFillEdit title='edit' color='blue'/>
                <GiCancel color='red' title='cancel' className='ms-3'/>
            </td>
          </tr>
        </tbody>
      </Table>
               </Col>
            </Row>
        </div>
    )
}
