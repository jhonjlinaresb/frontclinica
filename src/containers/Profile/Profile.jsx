import React from 'react';
//import { Link, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import { Form, Input, Button, notification } from 'antd';
import { Card } from 'antd';
import { DatePicker } from 'antd';
import axios from 'axios';


const { Header, Sider, Content } = Layout;

const layout = {
  labelCol: {
      span: 8,
  },
  wrapperCol: {
      span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
      offset: 8,
      span: 16,
  },
};
const Profile = ({ user }) => {

    const onFinish = (appointmentData) => {
        let appoinment = {
            'status': appointmentData.status,
            'date':appointmentData.date,
            'observations': appointmentData.observations,
            'dentist': appointmentData.dentist,
            'dni': user.dni
        }
        console.log('appointment: '+JSON.stringify(appoinment));
        console.log('user: '+JSON.stringify(user));
        axios.post(process.env.REACT_APP_BASE_URL+'/users/'+user.dni+'/appoinments', appoinment)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'Cita creada correctamente',description:'Cita creada'})
            }).catch(error => {
                notification.error({ message: 'Error al crear cita', description: 'Hubo un error al crear cita' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);  
    };
    return (
      <>
    <Layout>
      <Header><h1 style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', color: 'white' }}>Bienvenido {user.email}</h1></Header>

       <Layout>
       <Content style={{display: 'flex', justifyContent: 'center'}}>
      <div className="site-card-border-less-wrapper" style={{ textAlign: 'center', display: 'flex', padding: '30px', justifyContent: 'center'}}>
      <Sider style={{display: 'flex', padding: '2px', justifyContent: 'center', textAlign: 'center' }}>
        <Button type="primary" htmlType="submit">
                 Anular Citas
        </Button>
        <Button type="primary" htmlType="submit">
                  <a link href="http://localhost:3001/users/:dni/appoinments" >Ver Citas</a>
        </Button>
      </Sider>
      
       <Card title="Pedir cita" bordered={false} style={{ width: 300, textAlign: 'center' }}>
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            user={user}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                label="Estado"
                name="status"
                rules={[
                    {
                        required: true,
                        message: 'Estado',
                    },
                ]}
            >
                <Input />
                </Form.Item>

                <Form.Item
                label="Observaciones"
                name="observations"
                rules={[
                    {
                        required: true,
                        message: 'Observaciones...',
                    },
                ]}
            >
                <Input />
                </Form.Item>

            <Form.Item
                label="Elija fecha"
                name="date"
                rules={[
                    {
                        required: true,
                        message: 'Por favor elija fecha',
                    }
                ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
                label="Dentista"
                name="dentist"
                rules={[
                    {
                        required: true,
                        message: 'Introduzca el nombre del dentista',
                    },
                ]}
                >
            <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Create
        </Button>
            </Form.Item>
            
        </Form>
        </Card>
        
      
        </div>
        </Content>
        </Layout>
    </Layout>
  </>
);
}


export default Profile;
