import { lazy, Suspense, useState } from "react";

const Profile = lazy(() => import("./Profile"))

function Info() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <div>
      <h1>My Application</h1>
      <button onClick={() =>setShowProfile(true)}>Show Profile</button>
      {showProfile && (
        <Suspense fallback={<p>Loading Profile...</p>}>
          <Profile />
        </Suspense>
      )}
    </div>
  )
}

export default Info