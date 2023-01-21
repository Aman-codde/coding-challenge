import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function Employees() {
  const [employeesList, setEmployeesList] = useState([]);

  const loadEmployees = async () => {
    const response = await axios.get("http://localhost:3002/api/employees");
    setEmployeesList(response.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>EMPLOYEES LIST</h1>
        <div className="dropdown">
          <label>Sort By: </label>
          <select style={{ width: "150px", height: "30px" }}>
            <option value="name">Name</option>
            <option value="performance">Performance</option>
            <option value="date">Date</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Performance</th>
              <th>Date</th>
            </tr>
          </thead>
          {employeesList.map((employee) => {
            return (
              <tbody>
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.performance}</td>
                  <td>{employee.date}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Employees;
