import React from 'react'
import { Link } from 'react-router-dom';
import {TextField,Button,Typography} from '@material-ui/core';
import * as api from '../../api/index';

import memories_img from '../../images/memories.png';

const Login = ({setuser, user, setcurrentUser, currentUser}) => {
    const clear=()=>{
        setuser({Email:'',password:''})
    }
    const sign_in_handler= async (e)=>{
        e.preventDefault();
        try {
            await api.login(user);   
            // alert('You are successfylly Loged in');
            setcurrentUser(user.Email);
            clear();
        } catch (error) {
            alert('Wrong Email or Password');
            clear();
        }
    }

    return (
        <div className="Login-container" >
            <section style={{textAlign:'center'}} >
                <Typography variant='h3' style={{color:'rgb(236, 93, 117)'}}>Save Your Memories</Typography>
                <img className='memories-pic' alt='memories pic' src={memories_img} width="430px" style={{marginTop:'5px'}} />
            </section>   
            <form className='sign-in' onSubmit={sign_in_handler} >
                <TextField fullWidth style={{display:'block',marginTop:'7px'}} variant='outlined' type='email' name='Email' required  value={user.Email} label='Email' onChange={(e)=> setuser({...user ,Email: e.target.value }) } />
                <TextField fullWidth style={{display:'block',marginTop:'7px'}} variant='outlined' type='password' name='password' required  value={user.password} label='password' onChange={(e)=>setuser({...user , password: e.target.value})} />
                <Button style={{borderRadius:'5px',display:'block',marginTop:'7px'}} fullWidth variant='contained' color='primary' type='submit'>Log in</Button>
                <Button style={{borderRadius:'5px',marginTop:'7px'}} variant='contained' fullWidth color='secondary' type='button'><Link className='Link' to='/registration' >Sign up</Link></Button>
            </form>
        </div> 
    )
}

export default Login
