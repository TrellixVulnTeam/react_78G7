import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import { Button } from 'react-bootstrap'
function App() {
  return (
   
    <nav class="navbar navbar-fixed-top navbar-dark bg-primary">
  <div class="container">
  <ul class="nav navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#about">About US</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#speakers">Instructors</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#schedule">Schedule</a>
    </li>
    
  </ul>
  <a class="navbar-brand pull-sm-right m-r-0 hidden-xs-down" href="gomycode">Go My Code</a>
  </div>

<div class="jumbotron jumbotron-fluid bg-info">
  <div class="container text-sm-center p-t-3">
    <h1 class="display-2">Full Stack JS Courses</h1>
    <p class="lead">Everyday courses about everything JS</p>
    <div class="btn-group m-t-2" role="group" aria-label="Basic example">
    <Button variant="primary">Register Now</Button>{' '} 
    <Button variant="primary">See Instructors</Button>{' '}
      </div>
  </div>
</div>

</nav>
  );
}

export default App;
