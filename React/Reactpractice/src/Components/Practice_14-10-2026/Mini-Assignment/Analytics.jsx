import React from "react";

export default function Analytics({ summary }) {
  return (
    <section>
      <h2>Analytics Dashboard</h2>
      <p>Total employees: {summary.total}</p>
      <p>Average salary: Rs.{summary.averageSalary}</p>
      <p>
        Average performance: {summary.averagePerformance}%
      </p>
    </section>
  );
}
