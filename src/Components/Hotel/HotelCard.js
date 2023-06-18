import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const HotelCard = (props) => {
  return (
    <div>
      <Card className='m-2'>
        <CardImg top src={require('../../assets/img/hotel.jpg')} alt="Hotel image" />
        <CardBody>
          <CardTitle>Baku</CardTitle>
          <CardSubtitle>Hilton</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Book</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default HotelCard;