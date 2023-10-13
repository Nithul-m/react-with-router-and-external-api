import React, {useState, useEffect} from 'react'
import Restaurant from './Restaurant';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from './reducers/restaurantSlice';


function Home() {
   const dispatch = useDispatch()
  const restaurantsData = useSelector((state) => state.restaurants.data)
  console.log(restaurantsData);

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {

      // console.log(restaurants, "Initial value");
  
      let result = await fetch('./restaurants.json')
      .then((res) => res.json())
      // console.log(result.restaurants);
  
      setRestaurants(result.restaurants);
      dispatch()
    
  }
  fetchRestaurants();
}, [restaurants])
  
return (
  <Container>
    <Row>
    {restaurants && restaurants.map((restaurant, index) =>(
      <Col md={3} className = 'my-3' key = {index}>
      <Restaurant restaurant = {restaurant} />
      </Col>
    ))}
    {/* <button onClick={()=>fetchRestaurants()}>Get Data</button> */}
    
    </Row>
    </Container>  )
}


  
   

  

  // console.log(restaurants, "after value");

  

export default Home