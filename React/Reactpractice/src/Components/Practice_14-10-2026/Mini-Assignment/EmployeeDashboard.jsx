import react,{ useState, useMemo, useCallback, lazy, Suspense } from "react";
import EmployeeList from "./EmployeeList";

const Analytics = lazy(() => import("./Analytics"));

const employees = Array.from({ length:30}, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  department: ["IT", "HR", "Sales"][i % 3],
  salary: 25000 + (i % 10) * 5000,
  performance: 60 + (i % 40),
}))

export default function EmployeeDashboard() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showAnalytics, setShowAnalytics] = useState(false);

  const filteredEmployees = useMemo(() => {
    console.log("Filtering and sorting employees")
    return employees
      .filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((emp) =>
        department === "All" || emp.department === department
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.salary - b.salary
          : b.salary - a.salary
      );
  }, [search, department, sortOrder]);

  const summary = useMemo(() => ({
    total: filteredEmployees.length,
    averageSalary: filteredEmployees.length
      ? Math.round(
          filteredEmployees.reduce((sum, e) => sum + e.salary, 0) /
          filteredEmployees.length
        )
      : 0,
    averagePerformance: filteredEmployees.length
      ? Math.round(
          filteredEmployees.reduce((sum, e) => sum + e.performance, 0) /
          filteredEmployees.length
        )
      : 0,
  }), [filteredEmployees]);

  const handleSelect = useCallback((employee) => {
    console.log("Selected employee:", employee.name)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Employee Analytics Dashboard</h1>

      <input
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option>All</option>
        <option>IT</option>
        <option>HR</option>
        <option>Sales</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Salary: Low to High</option>
        <option value="desc">Salary: High to Low</option>
      </select>

      <h3>Total Employees: {summary.total}</h3>
      <h3>Average Salary: Rs.{summary.averageSalary}</h3>
      <h3>Average Performance: {summary.averagePerformance}%</h3>

      <EmployeeList
        employees={filteredEmployees}
        onSelect={handleSelect}
      />

      <button onClick={() => setShowAnalytics(true)}>
        Load Analytics
      </button>

      {showAnalytics && (
        <Suspense fallback={<p>Loading analytics...</p>}>
          <Analytics summary={summary} />
        </Suspense>
      )}
    </div>
  );
}
