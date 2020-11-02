import axios from 'axios';
import React, { useEffect } from 'react';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(async () => {
        try {
            const token = localStorage.getItem('authToken');
            const options = { headers: { Authorization: `` }}
        }
    }) 
}