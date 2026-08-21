import {
  useParams,
  Link,
  Outlet
} from "react-router-dom";

function RestaurantDetails() {

  const { id } = useParams();

  return (
    <div>
      <h1>Restaurant Details</h1>
      <h2>Restaurant ID: {id}</h2>
      <Link to="menu">Menu</Link>
      <br />
      <Link to="reviews">Reviews</Link>
      <hr />
      <Outlet />

    </div>
  );
}

export default RestaurantDetails;