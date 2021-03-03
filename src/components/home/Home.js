import React from 'react'

import Login from '../login/Login';
import Content from '../memory/content/Content';

import './home.css';
const Home = ({setuser, user, setcurrentUser, currentUser}) => {
    
    return (
        <div className='home-container' >
           
            {
                currentUser === ''? 
                <Login user={user} setuser={setuser} currentUser={currentUser} setcurrentUser={setcurrentUser} />
                :<Content currentUser={currentUser} /> 
            }
        </div>
    )
}

export default Home
