import React from 'react';

function Header() {
  return (
    
    <nav className="navbar  sticky-top bg-dark navbar-dark flex-md-nowrap p-0 nav-top">
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Manage System</a>
   
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
   
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap ">
        <a className="nav-link" href="/signIn">Sign IN</a>
      </li>
    </ul>
  </nav>
      
  );
}

export default Header
