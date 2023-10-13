import React, {useState, useEffect}from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'




function RestaurantDetails() {

    const {id} = useParams();
    
    const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {

      // console.log(restaurants, "Initial value");
  
      let result = await fetch('/restaurants.json')
      .then((res) => res.json())
      // console.log(result.restaurants);
  
      setRestaurants(result.restaurants);
  
    
  }
  fetchRestaurants();
}, [restaurants])


const restaurant = restaurants.find((item) => item.id == id)
// console.log(restaurant);
  return (
<Container>
    <Row>
        <Col md={6} className="mt-3">
        { restaurant && (
        <Card >
      <Card.Img variant="top" src={restaurant.photograph} />
      <Card.Body>
        <h3>{restaurant.name}</h3>
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
      </Card.Body>
        </Card>
        )
}
        </Col>
        <Col md={6} className="mt-3">
        { restaurant && (
        <Card >
        <ListGroup variant="flush">
          <h4>Operating hours
          </h4>
          <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
          <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
          <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
          <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
          <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
          <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
          <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>
          <br />
          <h4>Reviews</h4>
          <ListGroup.Item>Name: {restaurant.reviews[0].name}</ListGroup.Item>
          <ListGroup.Item>Date: {restaurant.reviews[0].date}</ListGroup.Item>
          <ListGroup.Item>Rating: {restaurant.reviews[0].rating}</ListGroup.Item>
          <ListGroup.Item>Comments: {restaurant.reviews[0].comments}</ListGroup.Item>
          <br />
          <ListGroup.Item>Name: {restaurant.reviews[1].name}</ListGroup.Item>
          <ListGroup.Item>Date: {restaurant.reviews[1].date}</ListGroup.Item>
          <ListGroup.Item>Rating: {restaurant.reviews[1].rating}</ListGroup.Item>
          <ListGroup.Item>Comments: {restaurant.reviews[1].comments}</ListGroup.Item>

        </ListGroup>
      </Card>
        )
}
        </Col>
    </Row>

</Container>
        )
}

export default RestaurantDetails