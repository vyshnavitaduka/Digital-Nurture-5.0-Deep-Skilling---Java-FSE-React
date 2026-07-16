import React from "react";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import EmployeesList from "./EmployeesList";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <EmployeesList />
      </div>
    </ThemeProvider>
  );
}

export default App;
