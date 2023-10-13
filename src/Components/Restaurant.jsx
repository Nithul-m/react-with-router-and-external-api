import React from 'react'
import { Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Restaurants({restaurant}) {
  // console.log(props.restaurant);
  return (
    <Card >
      <Card.Img variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title><h2>{restaurant.name}</h2></Card.Title>
        <Card.Title>
          <h4>
            {restaurant.neighborhood}
            <br />
          </h4>
          <h5>
            {restaurant.address}
            <br></br>
          </h5>
          <h5>
            Rating = {restaurant.reviews[0].rating}
          </h5>
        </Card.Title>
        <Button variant="primary" as={Link} to = {`/restaurant/${restaurant.id}`} >More Info</Button>
      </Card.Body>
    </Card>
  )
}

export default Restaurants