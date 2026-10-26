import { useEmployeeContext } from "./EmployeeContext";

export default function useEmployees() {
  const { employees, dispatch, loading, error } =
    useEmployeeContext();

  const addEmployee = (employee) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: { ...employee, id: Date.now() },
    });
  };

  const updateEmployee = (employee) => {
    dispatch({ type: "UPDATE_EMPLOYEE", payload: employee });
  };

  const deleteEmployee = (id) => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
  };

  return {employees,loading,error,addEmployee,updateEmployee,deleteEmployee };
}