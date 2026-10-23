import { lazy, Suspense, useState } from "react";

const Profile = lazy(() => import("./Profile"));

function Lazyloding() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <h1>Lazy Loading</h1>
      <button onClick={() => setShowProfile(true)}>
        Load Profile
      </button>

      {showProfile && (
        <Suspense fallback={<p>Loading profile...</p>}>
          <Profile />
        </Suspense>
      )}
    </div>
  );
}

export default Lazyloding;
