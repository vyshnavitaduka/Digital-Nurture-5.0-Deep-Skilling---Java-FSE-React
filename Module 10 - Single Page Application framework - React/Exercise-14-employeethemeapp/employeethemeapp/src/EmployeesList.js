import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import EmployeeCard from "./EmployeeCard";

const employees = [
  { id: 1, name: "Asha Rao", role: "Frontend Developer" },
  { id: 2, name: "Vikram Shah", role: "Backend Developer" },
  { id: 3, name: "Priya Nair", role: "QA Engineer" },
];

function EmployeesList() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Employees List</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default EmployeesList;
