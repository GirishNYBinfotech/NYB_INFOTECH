import { useEffect, useState } from "react";

function UserProfile() {
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    console.log("Fetching user:", userId)
    return () => {
      console.log("Cleaning up user:", userId);
    };
  }, [userId]);

  return (
    <div>
      <h2>User ID: {userId}</h2>
      <button onClick={() => setUserId((id) => id + 1)}>
        Next User
      </button>
    </div>
  );
}

export default UserProfile;