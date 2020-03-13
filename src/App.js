import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from './Loyout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Loyout/Sidebar';
import Main from './Pages/Main';


class App extends Component {
  render(){
  return (
   <BrowserRouter>
   <Header/>
   <div class="container-fluid">
      <div class="row">
   <Sidebar/>
   <Main/>
   </div>
   </div>
   </BrowserRouter>
  );
}
}
export default App;
