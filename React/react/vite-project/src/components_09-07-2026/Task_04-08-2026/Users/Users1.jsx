import { Link } from "react-router-dom";

function Users1() {
  return (
    <>
      <h2>Users List</h2>

      <ul>
        <li><Link to="/users/101">Rahul</Link></li>
        <li><Link to="/users/102">Priya</Link></li>
        <li><Link to="/users/103">Arjun</Link></li>
      </ul>
    </>
  );
}

export default Users1;