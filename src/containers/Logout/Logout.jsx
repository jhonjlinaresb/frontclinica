/* import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {notification} from 'antd';
import { Card } from 'antd';

const Logout = ({setUser}) => {
    const history = useHistory();
    const onFinish = users =>{
        console.log('onFinish');
        axios.post(process.env.REACT_APP_BASE_URL+'/users/logout',users)
        .then(res=>{
         // props.setUser(res.data.user) //seteo el user como estado del App.js
            setUser(res.data.user) //seteo el user como estado del App.js
            localStorage.setItem('authToken',res.data.token);
            localStorage.setItem('users',JSON.stringify(res.data.users))
            notification.success({message:'Goodbye Client',description:'Goodbye '+users.email})
            setTimeout(() => {
                history.push('/Logout')
            }, 1000);
        })
        .catch(error=>console.log(error))
    }

return(
    <div className="site-card-border-less-wrapper" style={{ textAlign: 'center', display: 'flex', padding: '30px', justifyContent: 'center'}}>
      <Card title="Logout" bordered={false} style={{ width: 300, textAlign: 'center' }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );}

export default Logout; */