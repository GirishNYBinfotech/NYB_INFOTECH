import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
import Table from "./Table";

function EmployeePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [employees, setEmployees] = useState([
    { id: 1, name: "Rahul", email: "rahul@example.com" },
    { id: 2, name: "Priya", email: "priya@example.com" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setEmployees((previous) => [
      ...previous,
      { id: Date.now(), ...form },
    ]);

    setForm({ name: "", email: "" });
    setIsOpen(false);
  }

  function deleteEmployee(id) {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  }

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "actions",
      label: "Actions",
      render: (employee) => (
        <Button
          variant="danger"
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1>Employee Management</h1>

      <Button onClick={() => setIsOpen(true)}>
        Add Employee
      </Button>

      <Table
        columns={columns}
        data={employees}
        getRowKey={(employee) => employee.id}
      />

      <Modal
        isOpen={isOpen}
        title="Add Employee"
        onClose={() => setIsOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <Input
            label="Employee Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            required
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />

          <Button type="submit">
            Save Employee
          </Button>

          <Button
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default EmployeePage;