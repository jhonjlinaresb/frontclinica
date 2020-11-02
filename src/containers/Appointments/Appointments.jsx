import axios from 'axios';
import React, { useEffect } from 'react';

const Appointments = (props) => {
    const [appointments, setAppointments] = useState([]);
    useEffect(async () => {
        try {
            const token = localStorage.getItem('authToken');
            const options = { headers: { Authorization: `Bearer ${token}` }};
            axios.get(process.env.REACT_APP_BASE_URL+'/users/'+props.user.dni+'/appoinments', options)
            .then(res=>setAppointments(res.data));

        }catch(error){
            console.error(error);
        }
    },[])
}