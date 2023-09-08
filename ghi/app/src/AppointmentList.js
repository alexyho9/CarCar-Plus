import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'



function AppointmentList() {
    const [appointmentTables, setappointmentTables] = useState([]);
    useEffect(()=> {console.log(appointmentTables)}, [appointmentTables]);

    async function getAppointments() {
        const url = 'http://localhost:8080/api/appointments/'

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json()

                let requests = [];
                for (let appointment of data.appointment) {
                    let detailUrl = `http://localhost:8080${appointment.href}`;
                    requests.push(fetch(detailUrl));
                }

                let responses = await Promise.all(requests);
                let tables = [];

                for (let appointmentResponse of responses) {
                    if (appointmentResponse.ok) {
                        let details = await appointmentResponse.json();
                        appointmentTables.push(details);
                    } else {
                        console.error(appointmentResponse);
                    }
                }
            }
        }
    }
    useEffect(() => {
        getAppointments();
    }, []);

    function
}

export default AppointmentList;
