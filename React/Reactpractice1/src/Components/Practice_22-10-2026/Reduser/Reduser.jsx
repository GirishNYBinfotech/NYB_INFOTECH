import React, { useReducer, useState } from "react";

const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name }
          : item
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.payload);

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function Reduser() {
  const [items, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  // Add item
  const addItem = () => {
    if (!name.trim()) return;

    dispatch({
      type: "ADD",
      payload: { id: Date.now(), name },
    });

    setName("");
  };

  return (
    <div>
      <h2>useReducer Example</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addItem}>Add</button>
      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      {items.map((item) => (
        <div key={item.id}>
          {item.name}

          <button
            onClick={() =>dispatch({
                type: "UPDATE",
                payload: {
                  id: item.id,
                  name: prompt("Enter updated name", item.name),
                },})}>
            Update
          </button>

          <button
            onClick={() =>dispatch({ type: "DELETE", payload: item.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}