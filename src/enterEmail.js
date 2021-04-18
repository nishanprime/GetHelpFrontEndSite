import React from 'react'
import "./enterEmail.css"
function enterEmail() {
    return (
        <div className="enterEmailContainer">
            <form className="emailForm" action="">
                <input type="text" placeholder="Enter patient email"/>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default enterEmail
