import { Link } from "react-router-dom";

function Restaurants() {

  return (
    <div>
      <h1>Restaurants</h1>
      <Link to="/restaurants/101"> Paradise Restaurant</Link>
      <br />
      <Link to="/restaurants/102"> Pizza House</Link>

    </div>
  );
}

export default Restaurants;