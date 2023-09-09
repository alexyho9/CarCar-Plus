import React, {useEffect, useState} from 'react';


const SalespeopleForm = () => {
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
    const data = {};
    data.employee_id = employeeId;
    data.first_name = firstName;
    data.last_name = lastName;

    const url = 'http://localhost:8090/api/salespeople/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newSalesperson = await response.json();

      setEmployeeId('');
      setFirstName('');
      setLastName('');
    }
  }

  return (

    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a New Salesperson</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input onChange={handleEmployeeIdChange} placeholder="Employee ID" required
                type="text" name="employee_id" id="employee_id" value={employeeId}
                className="form-control" />
              <label htmlFor="employee_id">Employee ID</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFirstNameChange} placeholder="First Name" required
                type="text" name="first_name" id="first_name" value={firstName}
                className="form-control" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleLastNameChange} placeholder="Last Name" required
                type="text" name="last_name" id="last_name" value={lastName}
                className="form-control" />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>

  );
}
export default SalespeopleForm;
