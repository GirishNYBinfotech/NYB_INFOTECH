import UseWindowSize from "./UseWindowSize";

function ScreenDetails() {
  const { width } = UseWindowSize()
  return (
    <div>
      <h2>Device</h2>
      {width > 768 ? <h3>Desktop</h3> : <h3>Mobile</h3>}
    </div>
  );
}

export default ScreenDetails;