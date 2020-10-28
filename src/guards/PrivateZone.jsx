import React from 'react'
import { Redirect } from 'react-router-dom';

const PrivateZone = (props) => {
    return props.user ? props.children : <Redirect to='/login' />
}

export default PrivateZone;
