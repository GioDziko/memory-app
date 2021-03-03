import React,{useState,useEffect} from 'react'
import * as api from '../../../api/index';
import Form from '../form/Form';
import Card from '../card/Card';
import SearchedCard from '../card/SearchedCard';
import './content.css';
import { Button,TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Content = ({currentUser}) => {
    const [post, setpost] = useState({creator:currentUser,title:'',message:'',tags:'',image:'', date: new Date()});
    const [memories, setMemories] = useState([]);
    const [searchedUser,setsearchedUser]=useState('');
    const [serchedUserInfo,setserchedUserInfo]=useState([]);
    const [boolean, setBoolean] = useState(false);


    const searchHandler= async () => {
        try {
            const {data} = await api.SearchData(searchedUser);
            console.log(data);
            setserchedUserInfo(data);
        } catch (error) {
            alert('Invalid user name')
        }
    }

    useEffect(async () =>  {
        const {data} = await api.fetchData(currentUser);        
        data.forEach(element => {
            setMemories((lastmemory)=>[...lastmemory,element])
        });
        
    }, [])
    return (
        <div className='content-container'>
            {console.log(searchedUser)}
            <div className='header-container'>
                <div className="header-searchbar" >
                    <TextField className="text-field header-text-field" name="Search" color='primary'label="Username" onChange={(e)=>setsearchedUser(e.target.value)} />
                    <Button onClick={searchHandler} className='header-button' variant='contained' color="secondary">Search &nbsp; <SearchIcon /></Button>
                </div>
                <Button className='header-button' variant='contained' color="primary" onClick={()=>{setBoolean(!boolean);}} >Create Memory</Button>
            </div>
            {
                searchedUser === ''?               
                <Card boolean={boolean} memories={memories} setMemories={setMemories} currentUser={currentUser} />
                :
                <SearchedCard serchedUserInfo={serchedUserInfo} boolean={boolean} searchedUser={searchedUser}/>
            }
        
            {
                boolean === true && <Form post={post} setBoolean={setBoolean} boolean={boolean} setpost={setpost} memories={memories} setMemories={setMemories}/>
            }
        </div>
    )
}

export default Content
