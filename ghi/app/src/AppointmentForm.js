import React, { useState, useEffect } from 'react';



function AppointmentForm() {
    const [date_time, setDate_Time] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('');
    const [customer, setCustomer] = useState('');
    const [technician, setTechnician] = useState([]);

    const handleDate_TimeChange = (event) => {
        setDate_Time(event.target.value);
    }

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleCustomerChange = (event) => {
        setCustomer(event.target.value);
    }

    const handleTechnicianChange = (event) => {
        setTechnician(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.date_time = date_time;
        data.reason = reason;
        data.status = status;
        data.customer = customer;
        data.technician = technician;
        console.log("before:", response.ok)
        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        console.log("after:", response.ok)
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        console.log("before app:", response.ok)
        if (response.ok) {
            console.log("after app:", response.ok)
            setDate_Time('');
            setReason('');
            setStatus('');
            setCustomer('');
            setTechnician('');
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnician(data.techicians);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Create an Appointment</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleDate_TimeChange}
                    placeholder="Pick Date and Time"
                    required
                    type="datetime-local"
                    name="date_time"
                    id="date_time"
                    className="form-control"
                    value={date_time}
                />
                <label htmlFor="date_time">Date and Time</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleReasonChange}
                    placeholder="Reason"
                    required
                    type="text"
                    name="reason"
                    id="reason"
                    className="form-control"
                    value={reason}
                />
                <label htmlFor="reason">Reason</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleCustomerChange}
                    placeholder="Customer"
                    required
                    type="text"
                    name="customer"
                    id="customer"
                    className="form-control"
                    value={customer}
                />
                <label htmlFor="customer">Customer</label>
                </div>
                <div className="mb-3">
                <select
                    onChange={handleTechnicianChange}
                    required
                    name="technician"
                    id="technician"
                    className="form-select"
                    value={technician}
                >
                    <option value="">Choose a Technician</option>
                    {technician.map(technician => {
                    return (
                        <option key={technician.href} value={technician.href}>
                        {technician.first_name}
                        </option>
                    );
                    })}
                </select>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
      );

}

export default AppointmentForm;
