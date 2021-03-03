import React from 'react';
import {TextField, Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import './form.css';
import * as api from '../../../api/index';
const Form = ({post,setpost,memories,setMemories,setBoolean,boolean}) => {
    
    const clear=()=>{
        setpost({...post,message:'',title:'',tags:'',image:''})
    }
    const submithandler= async (e)=>{
        e.preventDefault();
        try {
            await api.createMemory(post);
            setMemories((lastmemory)=>[...lastmemory,post]);
            clear();
        } catch (error) {
            alert('Something Wrong')
        }
    }

    return (
        <form className="Form" onSubmit={submithandler} >            
            <h2>Create your memory</h2>
            <TextField className="text-field" style={{marginTop:'12px'}} name="title" variant="outlined" label="title" value={post.title} onChange={(e)=>setpost({...post, title: e.target.value})} />
            <TextField className="text-field" style={{marginTop:'12px'}} name="message" variant="outlined" label="message" value={post.message} onChange={(e)=>setpost({...post, message: e.target.value})} />
            <TextField className="text-field" style={{marginTop:'12px',marginBottom:'5px'}} name="tags" variant="outlined" value={post.tags} label="tags" onChange={(e)=>setpost({...post, tags: e.target.value})} />
            <div style={{margin:'3px 0'}} ><FileBase type="image" multiple={false} onDone={({ base64 }) => setpost({ ...post, image: base64 })} /></div>
            <Button style={{margin:"3px 0"}} className="form-button" type='submit' variant="contained" color="primary" size="small"> Submit </Button>
            <Button style={{margin:"3px 0"}} className="form-button" variant="contained" color="secondary" size="small" onClick={clear} > Clear </Button>
            <Button style={{margin:"3px 0"}} className="form-button" variant="outlined" color="secondary" size="small" onClick={()=>{setBoolean(!boolean)}}> Cancel </Button>
        </form>
    )
}

export default Form
