import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={()=>navigate('/')} className='mb-3 bg-primary'><AiOutlineArrowLeft /> Home</Button>
      <h1>404 - PAGE NOT FOUND</h1>
    </div>
  )
}
