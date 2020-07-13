import React from 'react';
import img from './img.jpg';


import './App.css';

function App() {
  return (
    <div className="App">
    <div className="menu">
    <ul>
    <li className="active">What we do</li>
    <li>Who we work with</li>
    <li>Resources</li>
    <li>About us</li>
    <li>Careers</li>
    <li className="btn"> Contact Us</li>
    

    </ul>
    </div>
   
    <div className="banner">
    <div className="text">
    <h1>Xenonstack </h1>
    <p>We are Cloud Native and Platform Engineering Company Solving Complex Problems with Technology.<br></br>
    
    By Aligning Strategy and Execution, We Help Clients for Cloud Native transformation, Scale with flexibility and creating Digital customer experience.</p>
    </div>
    <div className="picture">
    <img src={img} alt="A pic"></img>
    </div>
    </div>
    </div>
  
  );
}

export default App;
