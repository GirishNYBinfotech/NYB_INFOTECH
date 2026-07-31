import React from 'react';

const Map = () => {
  let emp = [
    { id: 1, name: "Girish" },
    { id: 2, name: "king" },
    { id: 3, name: "queen" }
  ];

  return (
    <div>
        <h2>list</h2>
      {emp.map((emps) => {
        return (
          <h2 key={emps.id}>{emps.id}. {emps.name}</h2>
        )
      })}
    </div>
  );
};

export default Map