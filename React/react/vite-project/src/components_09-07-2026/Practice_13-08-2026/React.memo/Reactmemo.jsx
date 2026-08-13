import React from 'react'

function Reactmemo() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child name="Girish" />
    </>
  );
}

const Child = React.memo(function Child({ name }) {
  console.log("Child rendered")
  return <h1>Hello,{name}</h1>
});

// const Child = ({ name }) => {
//   console.log("Child rendered");

//   return <h2>Hello {name}</h2>;
// };

export default Reactmemo