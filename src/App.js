import React,{useState} from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './app.css';
import Home from './components/home/Home';
import Registration from './components/registration/Registration';
import Sregistration from './components/registration/SuccessfullyReg';
import Form from './components/memory/form/Form';

const App = () => {

    const [user, setuser] = useState({username:"", password:'', Email:''});
    const [currentUser, setcurrentUser] = useState('');
    return (
        <div className='App' >
           
           {/* {console.log(user)} */}
           {console.log(currentUser)}
           <Router>
               <Switch>
                   <Route exact path='/'>
                        <Home user={user} setuser={setuser} currentUser={currentUser} setcurrentUser={setcurrentUser} />  
                    </Route>
                   <Route path='/registration'>
                        {
                            currentUser===''?
                           <Registration user={user} setuser={setuser} currentUser={currentUser} setcurrentUser={setcurrentUser} />
                           :
                           <Sregistration />
                        }
                    </Route>
               </Switch>
           </Router>
        </div>
    )
}

export default App
