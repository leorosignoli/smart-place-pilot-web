import React from 'react';
import './App.css';


function User() {

  return (
    <body>
        
      <div className="wrapper" >

        <form id='userForm'>
          <div class="form-label" id="labelForm">
            <h2>User</h2>
          </div>

          <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" class="form-control">
            </input>
          </div>

          <div class="row">
            <div class="col">
              <label>First Name</label>
              <input type="text" name="first-name" class="form-control" />
            </div>
            <div class="col">
              <label>Last Name</label>
              <input type="text" name="last-name" class="form-control" />
            </div>
          </div>

          <div class="form-group">
            <label>
              E-mail</label>
            <input name="email" class="form-control" />

          </div>

          <div class="row">
            <div class="col">
              <label>Password</label>
              <input type="password" name="password" class="form-control" />
            </div>
            <div class="col">
              <label>Confirm Password</label>
              <input type="password" name="confirm-password" class="form-control" id="confirm_password" onkeyup='check();'/>
            </div>
          </div>

          <div id="bttSeparation">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      

    </body>   
  )
}
var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}
export default User;