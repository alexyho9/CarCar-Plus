import React, {useEffect, useState} from 'react';


const CustomerForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.address = address;
    data.phone_number = phoneNumber;

    const url = 'http://localhost:8090/api/customers/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setAddress('');
    }
  }

  return (

    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a New Customer</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">

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
            <div className="form-floating mb-3">
              <input onChange={handlePhoneNumberChange} placeholder="Phone Number" required
                type="text" name="phone_number" id="phone_number" value={phoneNumber}
                className="form-control" />
              <label htmlFor="phone_number">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleAddressChange} placeholder="Address" required
                type="text" name="address" id="address" value={address}
                className="form-control" />
              <label htmlFor="address">Address</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default CustomerForm;
