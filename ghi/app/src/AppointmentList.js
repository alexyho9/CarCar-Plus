import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  // useEffect(()=> {console.log(appointments)}, [appointments]);

  function formatDate(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleDateString();
  }

  function formatTime(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleTimeString();
  }

  async function fetchAppointments() {
    const url = 'http://localhost:8080/api/appointments/';

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments);
      } else {
        console.error('Failed to get appointment:', response.status);
      }
    } catch (error) {
      console.error('Error while getting appointments:', error);
    }
  }

  const cancelApp = async (appointmentId) => {
    try {
      const url = `http://localhost:8080/api/appointments/${appointmentId}/cancel/`
      const response = await fetch(url, { method: 'PUT'});

      if (response.ok) {
        fetchAppointments();
      } else {
        console.error(response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const finishApp = async (appointmentId) => {
    try {
      const url = `http://localhost:8080/api/appointments/${appointmentId}/finish/`
      const response = await fetch(url, { method: 'PUT'});

      if (response.ok) {
        fetchAppointments();
      } else {
        console.error(response.status)
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchAppointments();
  }, []);


  return (
    <div className="shadow p-4 mt-4">
      <h1>Appointment</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Is VIP?</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.filter(app => app.status === 'created').map(appointment => (
            <tr key={appointment.href}>
              <td>{appointment.vin}</td>
              <td>{appointment.vip ? "Yes" : "No"}</td>
              <td>{appointment.customer}</td>
              <td>{formatDate(appointment.date_time)}</td>
              <td>{formatTime(appointment.date_time)}</td>
              <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.status}</td>
              <td>
                {appointment.status === 'created' && (
                  <>
                    <button className="btn btn-danger" onClick= {() => cancelApp(appointment.id)}>Cancel</button>
                    <button className="btn btn-success" onClick= {() => finishApp(appointment.id)}>Finish</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
