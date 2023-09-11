import React, { useState, useEffect } from 'react';



function ServicesHistory() {
    const [appointments, setAppointments] = useState([]);

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

      useEffect(() => {
        fetchAppointments();
      }, []);


      return (
        <div className="shadow p-4 mt-4">
          <h1>Service History</h1>
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
              </tr>
            </thead>
            <tbody>
              {appointments.filter(app => app.status === 'cancelled' || app.status === 'finished').map(appointment => (
                <tr key={appointment.href}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip ? "Yes" : "No"}</td>
                  <td>{appointment.customer}</td>
                  <td>{formatDate(appointment.date_time)}</td>
                  <td>{formatTime(appointment.date_time)}</td>
                  <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ServicesHistory;
