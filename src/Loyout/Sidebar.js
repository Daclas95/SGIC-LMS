import React from 'react';

function Sidebar() {
  return (

<nav className="col-md-2 d-none d-md-block bg-dark sidebar" id="IPP">
          <div class="sidebar-sticky">
            <hr></hr>
            <ul class="nav flex-column" >
              <li class="nav-item ">
                <a class="nav-link active nav-collor" href="/home">
                  <span data-feather="home"></span>
                  HOME <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-collor" href="/applyleave">
                  <span data-feather="shopping-cart"></span>
                  Apply for Leave
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link nav-collor" href="/employees">
                  <span data-feather="file"></span>
                  Manage Leave
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-collor" href="/employees">
                  <span data-feather="file"></span>
                  Manage Leave
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-collor" href="/employees">
                  <span data-feather="file"></span>
                  Manage Leave
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-collor" href="/employees">
                  <span data-feather="file"></span>
                  Manage Leave
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Admin</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link nav-collor" href="#">
                  <span data-feather="file-text"></span>
                  Manage employees
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-collor" href="#">
                  <span data-feather="file-text"></span>
                  Leave Details
                </a>
              </li>
             
            </ul>
          </div>
        </nav>
         );
        }
        
        export default Sidebar