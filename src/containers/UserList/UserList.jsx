import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';

const Users = (userList) => {
    let users = {
        '_id': userList._id,
        'email':userList.email,
        'dni': userList.dni
    }
    console.log('appointment: '+JSON.stringify(users));
    const [user, setUsers] = useState([]);
    useEffect(() => {
        //const token = localStorage.getItem('authToken');
        axios.get(process.env.REACT_APP_BASE_URL+'/users',{
            
        }).then(res=>setUsers(res.data));
    }, [])

    

const { Column, ColumnGroup } = Table;

const data = [
  {
    "_id" : users._id,
    "email" : users.email,
    "dni" : users.dni
  },
  {
    "_id" : users._id,
    "email" : users.email,
    "dni" : users.dni
  },
  {
    "_id" : users._id,
    "email" : users.email,
    "dni" : users.dni
  },
];

return(
    
  <Table dataSource={data}>
    <ColumnGroup title="User List">
      <Column title="id" dataIndex="id" key={user._id} />
    </ColumnGroup>
    <Column title="Email" dataIndex="email" key={user.email} />
    <Column title="DNI" dataIndex="dni" key={user.dni} />
    
    <Column
      title="Action"
      key="action"
      render={() => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
    
    
}

export default Users
