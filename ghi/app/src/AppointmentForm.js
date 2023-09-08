import React, { useState, useEffect } from 'react';



function AppointmentForm() {
    const [vin, setVin] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [reason, setReason] = useState('');
    const [customer, setCustomer] = useState('');
    const [technician, setTechnician] = useState('');
    const [technicians, setTechnicians] = useState([]);

    const handleVinChange = (event) => {
        setVin(event.target.value);
    }

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value);
    }

    const handleReasonChange = (event) => {
        setReason(event.target.value);
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
        data.vin = vin;
        data.date_time = dateTime;
        data.reason = reason;
        data.customer = customer;
        data.technician_id = technician;

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            setVin('');
            setDateTime('');
            setReason('');
            setCustomer('');
            setTechnician('');
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
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
            <div className="form-floating mb-3">
                <input
                    onChange={handleVinChange}
                    placeholder="Vin"
                    required
                    type="text"
                    name="vin"
                    id="vin"
                    className="form-control"
                    value={vin}
                />
                <label htmlFor="vin">Automible VIN</label>
                </div>
            <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleDateTimeChange}
                    placeholder="Pick Date and Time"
                    required
                    type="datetime-local"
                    name="datetime"
                    id="datetime"
                    className="form-control"
                    value={dateTime}
                />
                <label htmlFor="datetime">Date and Time</label>
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
                    placeholder="Technician"
                    required
                    name="technician"
                    id="technician"
                    className="form-select"
                    value={technician}
                >
                    <option value="">Choose a Technician</option>
                    {technicians.map(technician => {
                        return (
                            <option key={technician.employee_id} value={technician.employee_id}>
                            {technician.first_name} {technician.last_name}
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
