import React, { useState, useEffect } from "react";
import User from "./User";
import WithLoading from "./WithLoding";


const UserWithLoading = WithLoading(User);

function Loding() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setName("King")
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <UserWithLoading
      isLoading={loading}
      name={name}
    />
  );
}

export default Loding