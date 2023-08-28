import { Input } from '@mui/material'
import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { RiMessengerLine, RiTwitterLine } from 'react-icons/ri'
import { Button, Col, FormGroup, Row } from 'reactstrap'

export default function Contact() {
  return (
    <Row>
        <Col style={{marginLeft:'50px',marginTop:'50px'}}>
          <img width='500' height='300' src={require('../../assets/img/m2.jpg')}/>
        </Col>
        <Col style={{marginTop:'50px'}}>
         <h1 style={{fontSize:'40px',color:'gray'}}>Contact Us</h1>
         <Row style={{width:'500px',height:'300px',marginTop:'30px',border:'3px gray solid'}}>
            <Col style={{marginLeft:'10px'}}>
            <FormGroup>
             <Input className='input' type='text' style={{borderBottom:'2px solid gray',borderTop:'0px',borderLeft:'0px',borderRight:'0px',marginTop:'15px'}} placeholder='Full Name' />
             </FormGroup>
             <FormGroup>
             <Input className='input' type='email' style={{borderBottom:'2px solid gray',borderTop:'0px',borderLeft:'0px',borderRight:'0px',marginTop:'15px'}} placeholder='Email' />
             </FormGroup>
             <FormGroup>
             <Input className='input' type='text' style={{borderBottom:'2px solid gray',borderTop:'0px',borderLeft:'0px',borderRight:'0px',marginTop:'15px'}} placeholder='Message' />
             </FormGroup>
             <Button style={{marginTop:'30px',width:'175px',border:'0px',background:'gray',color:'white'}} color='gray'>Contact Us</Button>
            </Col>
            <Col>
            <div style={{marginTop:'20px'}}>
             <p style={{fontSize:'15px'}}>hotelreservation@gmail.com</p>
            </div>
            <div style={{marginTop:'45px'}}>
             <p style={{fontSize:'15px'}}>Azerbaijan,Baku</p>
             <span>Elmler akademiyasi</span>
            </div>
            <div style={{marginTop:'70px',fontSize:'20px'}}>
            <FaWhatsapp style={{marginRight:'15px'}}/><RiMessengerLine style={{marginRight:'15px'}}/><FaInstagram style={{marginRight:'15px'}}/><RiTwitterLine style={{marginRight:'15px'}}/>
            </div>
            </Col>
         </Row>
        </Col>
    </Row>
  )
}
