import React, { lazy, Suspense } from "react"

const Home = lazy(() => import("./Home"))
const About = lazy(() => import("./About"))
const Contact = lazy(() => import("./Contact"))

function Mainpage() {
  return (
    <div>
    <Suspense fallback={<h2>Loading...</h2>}>
      <Home/>
      <About />
    </Suspense>
    <Contact />
    </div>
  );
}

export default Mainpage