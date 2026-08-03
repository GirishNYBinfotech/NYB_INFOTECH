import {  Link } from "react-router-dom";



function Mainpage () {
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <Link to="/appliction">Home</Link> |
        <Link to="/appliction/about"> About</Link> |
        <Link to="/appliction/contact"> Contact</Link>
      </nav>
      
      <hr />
    </div>
  );
}

export default Mainpage