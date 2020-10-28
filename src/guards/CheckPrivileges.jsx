import React from 'react'
import { Redirect } from 'react-router-dom';

const CheckPrivileges = (props) => {
    return props.roles.includes(props.user.role) ? props.children : <Redirect to='/' />
}

export default CheckPrivileges;