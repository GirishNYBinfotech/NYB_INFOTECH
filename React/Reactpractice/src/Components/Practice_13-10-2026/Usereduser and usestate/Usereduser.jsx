import { useReducer } from "react";

const initialState = {
  name: "",
  salary: "",
  department: "",
  employees: [],
  error: ""
};

function Empform(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    case "ADD_EMPLOYEE":
      if (!state.name || !state.salary || !state.department) {
        return {
          ...state,
          error: "Please fill all fields"
        };
      }

      return {
        ...state,
        employees: [
          ...state.employees,
          {
            id: Date.now(),
            name: state.name,
            salary: state.salary,
            department: state.department
          }
        ],
        name: "",
        salary: "",
        department: "",
        error: ""
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.id !== action.id
        )
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: ""
      };

    default:
      return state;
  }
}

function Usereduser() {
  const [state, dispatch] = useReducer(
    Empform,
    initialState
  );

  function handleChange(e) {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  }

  return (
    <div>
      <h2>Employee Management</h2>

      <input
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />

      <input
        name="salary"
        placeholder="Salary"
        value={state.salary}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={state.department}
        onChange={handleChange}
      />

      <button
        onClick={() => dispatch({ type: "ADD_EMPLOYEE" })}
      >
        Add Employee
      </button>

      {state.error && <p>{state.error}</p>}

      {state.employees.map((emp) => (
        <div key={emp.id}>
          <p>
            {emp.name} - {emp.salary} - {emp.department}
          </p>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_EMPLOYEE",
                id: emp.id
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Usereduser;
