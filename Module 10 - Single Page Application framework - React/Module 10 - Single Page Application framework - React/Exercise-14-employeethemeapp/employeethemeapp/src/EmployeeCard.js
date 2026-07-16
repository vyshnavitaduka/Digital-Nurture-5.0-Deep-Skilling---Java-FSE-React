import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function EmployeeCard({ employee }) {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    margin: "8px",
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <div style={cardStyle}>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
    </div>
  );
}

export default EmployeeCard;
