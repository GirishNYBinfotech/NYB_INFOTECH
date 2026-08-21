import {Routes,Route,Link,Navigate} from "react-router-dom";
import Home from "./Home";
import Restaurants from "./Restaurants";
import RestaurantDetails from "./RestaruantsDetails";
import Menu from "./Menu";
import Reviews from "./Reviews";
import NotFound from "./Notfound";
import Profile from "./Profile";
import Login from "./Login";
import { useState } from "react";


function AllDetails() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/restaurants">Restaurants</Link> {" | "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/restaurants/:id" element={<RestaurantDetails/>}>
          <Route path="menu" element={<Menu/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
         <Route path="/login"element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/profile" element={isLoggedIn? <Profile/>: <Navigate to="/" />}/>
        <Route path="*"element={<NotFound/>}/>

      </Routes>
      </>
  );
}

export default AllDetails