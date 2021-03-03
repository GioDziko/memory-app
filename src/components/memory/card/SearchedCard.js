import React from 'react'
import Cart from './Cart';
import {CircularProgress} from '@material-ui/core';
const SearchedCard = ({serchedUserInfo,boolean,searchedUser}) => {
    if(serchedUserInfo.length <1) 
    return( 
        <div style={{margin:"auto",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }} >
            <h1 style={{color:'blue',marginBottom:'20px',opacity:'0.8'}} >No post Found yet</h1>
            <CircularProgress variant="indeterminate" style={{margin:'auto'}} />
        </div>
    );
    return (
        <div className={boolean===false ? 'Card':"Card_When_User_Creates_Memory"} >      
            <div style={{width:'100%',textAlign:'center',margin:'30px 0',color:"#f50057"}} ><h1>{searchedUser}'s Memories</h1></div>
            {
                serchedUserInfo.map((memory,index)=>(
                    <Cart key={index} memory={memory} currentUser={searchedUser} />
                ))
            }
        </div>
    )
}

export default SearchedCard
