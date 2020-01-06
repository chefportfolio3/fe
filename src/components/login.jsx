import React, { useState } from 'react';
import { Input, Button, Dialog } from '@material-ui/core';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [modal, setModal] = useState(false)

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

    const handleClose = () => {
        setModal(false)
    }

    return (
        <>
            <Dialog open={modal} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <Input
                        name='username'
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
            </Dialog>
            <Button onClick={() => setModal(true)}>Show Login</Button>
        </>
    )
}

export default Login;