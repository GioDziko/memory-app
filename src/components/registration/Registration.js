import React from 'react'
import { Link } from 'react-router-dom';
import * as api from '../../api/index';
import {TextField,Button,Typography} from '@material-ui/core';
import './registration.css';
const Registration = ({user,setuser,currentUser,setcurrentUser}) => {
    
    const registration_handler = async (e)=>{
        e.preventDefault();
        try {
            await api.register(user);
            setcurrentUser(user.username);
        } catch (error) {
            alert('Email is already exists');    
        }     
    }    
    return (
        <div className='signup-registration' >
            <Typography variant='h3' style={{color:'gray'}} >Sign up</Typography>
            <form className='form-registration' onSubmit={registration_handler} >
                <TextField fullWidth style={{display:'block',marginTop:'7px'}} variant='outlined' type='email' name='Email' required  value={user.Email} label='Email' onChange={(e)=> setuser({...user ,Email: e.target.value }) } />
                <TextField fullWidth style={{display:'block',marginTop:'7px'}} variant='outlined' type='text' name='username' required  value={user.username} label='Username' onChange={(e)=> setuser({...user ,username: e.target.value }) } />
                <TextField fullWidth style={{display:'block',marginTop:'7px'}} variant='outlined' type='password' name='password' required  value={user.password} label='password' onChange={(e)=>setuser({...user , password: e.target.value})} />
                <Button style={{borderRadius:'5px',display:'block',marginTop:'7px'}} fullWidth variant='contained' color='primary' type='submit'>Register</Button>
                <Button style={{borderRadius:'5px',marginTop:'7px'}} variant='contained' fullWidth color='secondary' type='button'><Link className='Link' to="/" > Home </Link></Button>
            </form>
        </div>
    )
}

export default Registration

