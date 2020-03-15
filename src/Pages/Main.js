import React from 'react';
import {Route} from 'react-router-dom'
import ManageLeave from '../Pages/ManageLeave'
import Home from '../Pages/Home'
import ApplyLeave from './ApplyLeave';
import SingIn from './SingIn';
import AddEmployee from './AddEmployee';
import Empdetails from './Empdetails';


function Main() {
  return (

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
  
    <Route path='/employees' component={ManageLeave}></Route>
    <Route path='/home' component={Home}></Route>
    <Route path='/applyleave' component={ApplyLeave}></Route>
    <Route path='/signIn' component={SingIn}></Route>
    <Route path='/AddEmployee' component={AddEmployee}></Route> 
    <Route path='/Empdetails' component={Empdetails}></Route>
     
</main>
     
     );
    }
    
    export default Main