import UseWindowSize from "./UseWindowSize";

function WindowInfo() {
  const { width, height } = UseWindowSize();

  return (
    <div>
      <h2>Window Info</h2>
      <h3>Width : {width}</h3>
      <h3>Height : {height}</h3>
    </div>
  );
}

export default WindowInfo;