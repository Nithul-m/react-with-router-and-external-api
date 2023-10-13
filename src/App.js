import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantDetails from "./Components/RestaurantDetails";
function App() {
  return (
    <Router>
      <Header />
        <Routes>
          
          <Route path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path = "/restaurant/:id" element={<RestaurantDetails/>}/>



        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
