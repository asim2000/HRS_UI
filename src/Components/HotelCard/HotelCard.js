import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

const HotelCard = (props) => {
  const navigate = useNavigate()
  
  return (
    <div>
      <Card className='m-2' onClick={()=>navigate('/hotel/'+props.hotel.id+'/details')}>
        <CardImg style={{width:'auto',height:'200px'}} top src={require(`../../assets/img/${props.hotel.mainImageName}`)} alt="Hotel image" />
        <CardBody>
          <CardTitle>{props.hotel.name}</CardTitle>
          <CardSubtitle>Azerbaijan,{props.hotel.address.city.name},{props.hotel.address.addressLine}</CardSubtitle>
          <CardText>Starting from {props.hotel.minimumPrice} Azn</CardText>
          <CardText>
          <Badge className='bg-primary'>8.7</Badge> <b>Excellent</b> 1823 review
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default HotelCard;