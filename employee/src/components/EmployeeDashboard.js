import React from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const { id } = useParams();
  const employeeDetails = {
    1: { name: 'John Doe', position: 'Software Engineer' },
    2: { name: 'Jane Smith', position: 'Product Manager' },
    // Add more employee details as needed
  };

  const employee = employeeDetails[id];

  return (
    <div className="employee-dashboard">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Employee Dashboard</h1>
        <h2 className="dashboard-welcome">Welcome, {employee?.name || 'Employee'}</h2>
        <p className="dashboard-position">Position: {employee?.position}</p>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
