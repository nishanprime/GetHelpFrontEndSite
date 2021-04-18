import React from 'react';
import "./headerStyle.css"
const header = () => {
    return (
        <div className="headerContainer">
         <h1>Get Help</h1>
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Patient Email Address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
 
  
  <button type="submit" className="btn btn-primary">Get Info</button>
</form>

            <div className="logoContainer"><img className="logo" src="https://i.ibb.co/djX5kdD/logo.png" alt=""/></div>
           
        </div>
    );
}

export default header;
