import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

const HotelCard = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <Card className='m-2' onClick={()=>navigate('/hotel/details')}>
        <CardImg top src={require('../../assets/img/hotel.jpg')} alt="Hotel image" />
        <CardBody>
          <CardTitle>Hilton</CardTitle>
          <CardSubtitle>Azerbaijan,Baku</CardSubtitle>
          <CardText>Starting from 200 Azn</CardText>
          <CardText>
            <Badge className='bg-primary'>8.7</Badge> <b>Excellent</b> 1823 review
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default HotelCard;