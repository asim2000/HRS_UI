import React, { Component } from 'react'
import {  Navbar } from 'reactstrap'

export default class Footer extends Component {
  render() {
    return (
      <div className='mt-3'>
        <Navbar color='light'light className='' style={{textAlign:"center"}}>
            <div className='mt-3 d-block mb-3 justify-content-center' style={{width:"100%"}}>Footer</div>
        </Navbar>
      </div>
    )
  }
}
