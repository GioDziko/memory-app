import React,{useEffect} from 'react'
import * as api from '../../../api/index';
import Cart from './Cart';
import { CircularProgress  } from '@material-ui/core';
const Card = ({memories,currentUser,setMemories,boolean}) => {   
    if(memories.length <1) 
    return( 
        <div style={{margin:"auto",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }} >
            <h1 style={{color:'blue',marginBottom:'20px',opacity:'0.8'}} >No post Found yet</h1>
            <CircularProgress variant="indeterminate" style={{margin:'auto'}} />
        </div>
    );
    return (
        <div className={boolean===false ? 'Card':"Card_When_User_Creates_Memory"} >
            
            {   
                memories.map((memory,index)=>(
                    <Cart  key={index} memory={memory} currentUser={currentUser} />
                ))
            }
        </div>
    )
}

export default Card
