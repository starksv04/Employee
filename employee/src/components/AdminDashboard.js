import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const initialEmployees = [
    { name: 'John Doe', position: 'Software Engineer' },
    { name: 'Jane Smith', position: 'Product Manager' },
    { name: 'Alice Johnson', position: 'UX Designer' },
    { name: 'Bob Brown', position: 'Data Scientist' },
    { name: 'Charlie Davis', position: 'QA Engineer' },
    { name: 'Emily Clark', position: 'DevOps Engineer' },
    { name: 'Frank Martin', position: 'System Analyst' },
    { name: 'Grace Lee', position: 'Project Manager' },
    { name: 'Henry Walker', position: 'Network Administrator' },
    { name: 'Ivy Garcia', position: 'Business Analyst' },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updatedEmployees = employees.map((employee, index) =>
        index === editIndex ? { name, position } : employee
      );
      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, { name, position }]);
    }
    setName('');
    setPosition('');
  };

  const handleEdit = (index) => {
    setName(employees[index].name);
    setPosition(employees[index].position);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredEmployees = employees.filter((_, i) => i !== index);
    setEmployees(filteredEmployees);
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-container">
        <div className="form-column">
          <h2 className="form-title">Add / Update Employee</h2>
          <input
            type="text"
            className="input-field"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <button className="action-button" onClick={handleAddOrUpdate}>
            {editIndex !== null ? 'Update Employee' : 'Add Employee'}
          </button>
        </div>

        <div className="list-column">
          <h2 className="list-title">Employee List</h2>
          {employees.length > 0 ? (
            <ul className="employee-list-items">
              {employees.map((employee, index) => (
                <li key={index} className="employee-item" onClick={() => handleEdit(index)}>
                  <span>{employee.name} - {employee.position}</span>
                  <button className="delete-button" onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering edit on click
                    handleDelete(index);
                  }}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No employees added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
