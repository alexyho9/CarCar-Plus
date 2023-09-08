import React, { useEffect, useState } from 'react';

const TechnicianForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleEmployeeIdChange = (event) => {
    setEmployeeId(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {}
    data.employee_id = employeeId;
    data.first_name = firstName;
    data.last_name = lastName;

    const technicianUrl = 'http://localhost:8080/api/technicians/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(technicianUrl, fetchConfig);
    if (response.ok) {
      setEmployeeId('');
      setFirstName('');
      setLastName('');
    }
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a Technician</h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleEmployeeIdChange}
                placeholder="EmployeeId"
                required
                type="text"
                name="employeeId"
                id="employeeId"
                className="form-control"
                value={employeeId}
              />
              <label htmlFor="employeeId">Employee ID</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFirstNameChange}
                placeholder="FirstName"
                required
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                value={firstName}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleLastNameChange}
                placeholder="LastName"
                required
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                value={lastName}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;
