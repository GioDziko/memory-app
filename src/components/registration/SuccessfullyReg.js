import React from 'react'
import {Link} from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
const SuccessfullyReg = () => {
    return (
        <div className='sregister' >
            <Typography variant='h3'>You are successfully Registered</Typography>
            <Button style={{borderRadius:'5px',display:'block',marginTop:'20px'}} variant='contained' color='primary' ><Link className="Link" to='/'>Get started</Link></Button>
        </div>
    )
}

export default SuccessfullyReg
