import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "./context";
import coursly from '../images/coursly.png';
import './style.css'
const Navbar = () => {
  const { user,token, } = useContext(AllContext);
console.log(token);
console.log(user);
  return (
    <div>
      {user ? (
        <nav class="navbar navbar-dark bg-dark">
          <Link to="/homepage">
          <img src={coursly} style={{width:100}}></img>
          </Link>
          <Link to="/mycourses">
            <button className="cssbuttons-io-button">My Courses </button>
          </Link>
          <Link to="/addcourses">
            <button className="cssbuttons-io-button">Add Courses </button>
          </Link>
          <h3 style={{ color: "white" }}> hi: {user.name} </h3>
          <button className="cssbuttons-io-button" id="html" onClick={()=>{localStorage.clear()}}>
            <span id="htmltxt">Logout</span>
          </button>
        </nav>
      ) : (
        <nav class="navbar navbar-dark bg-dark">
          
          <Link to="/homepage">
           
          <img src={coursly} style={{width:100}}></img>
          </Link>
          <h3 style={{ color: "white" }}> </h3>
          <Link to="/login">
            
            <button className="cssbuttons-io-button1" id="html">
              
              <span id="htmltxt">Login</span>
            </button>
          </Link>
          <Link to="/signup">
            
            <button className="cssbuttons-io-button1" id="html">
              
              <span id="htmltxt">Signup</span>
            </button>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
