import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Image } from 'antd';

const contentStyle = {
  height: '550px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#3195FF',
};
class Home extends Component {
    render(){
        return (
    <Carousel autoplay>
    <div>
    <h1 style={contentStyle}>
    <p>Welcome to Clinic Dental</p>
    <Image width={300} src="https://i.ibb.co/Ht0wZrK/dentalicon.png"/> 
    </h1>
    </div>
    <div>
    <h1 style={contentStyle}>
    <p>Services Odontologics</p>
    <Image width={400} src="https://i.ibb.co/KyP8CcL/dientes.png"/> 
    </h1>
    </div>
  </Carousel>
  );}
}

export default Home; 

