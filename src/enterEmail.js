import React from 'react'
import "./enterEmail.css"
function enterEmail() {
    return (
        <div className="enterEmailContainer">
            <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Patient Email Address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
 
  
  <button type="submit" className="btn btn-primary">Get Info</button>
</form>
        </div>
    )
}

export default enterEmail
