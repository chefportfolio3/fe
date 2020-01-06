import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // request here
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Input
                name='username'
                type='tele'
                placeholder='Username'
                value={user.username}
                onChange={handleChange}
                required
            />
            <Input
                type='password'
                name='password'
                placeholder='Password'
                value={user.password}
                onChange={handleChange}
                required
            />
            <Button color='primary' variant='contained' type='submit'>
                Login
                </Button>
        </form>
        </>
    )
}

export default Login;