import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';

const Appointments = (user) => {
    //console.log(JSON.stringify(user));
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        
            console.log(JSON.stringify(user));
            console.log('path appoinments : '+process.env.REACT_APP_BASE_URL+'/users/'+user.user.dni+'/appoinments')
            axios.get(process.env.REACT_APP_BASE_URL+'/users/'+user.user.dni+'/appoinments',{})
            .then(res=>setAppointments(res.data.appointment));

        
    }, [])
    
const deleteAppointment = (dni) => {
  console.log(dni);
    axios.delete(process.env.REACT_APP_BASE_URL+'/users/'+dni+'/appoinments',{})
    .then(res=>setAppointments(res.data.appointment));
}


const { Column, ColumnGroup } = Table;



return(
    
  <Table dataSource={appointments}>
    <ColumnGroup title="Citas">
      
    
    <Column title="Status" dataIndex="status" key='status' />
    <Column title="Date" dataIndex="date" key='date' />
    <Column title="Observations" dataIndex="observations" key='observations' />
    <Column title="Dentist" dataIndex="dentist" key='dentist' />
    <Column title="DNI" dataIndex="dni" key='dni' />
    </ColumnGroup>

    
    <Column
      title="Action"
      key="action"
      render={(dni) => (
        <Space size="middle">
          <a onClick={() => deleteAppointment(user.user.dni)}>Delete</a>
        </Space>
      )}
    />
  </Table>
);}
    
    



export default Appointments;