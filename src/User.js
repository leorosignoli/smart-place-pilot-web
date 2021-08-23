import React from 'react';
import './App.css';
import './JsonfyData';



function User() {

  document.addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
    const data = Array.from(formData.entries()).reduce((memo, pair) => ({
      ...memo,
      [pair[0]]: pair[1],
    }), {});
    document.getElementById('output').innerHTML = JSON.stringify(data);
    e.preventDefault(); // stops from refreshing the page
  })

  return (
    
    <body>

      <div className="wrapper" >

        <form id='myForm'>
          <div class="form-label" id="labelForm">
            <h2>User</h2>
          </div>

          <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" class="form-control" id="username">
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
              <label>password :
                <input name="password" id="password" type="password" class="form-control" />
              </label>
            </div>
            <div class="col">
              <label>confirm password:
                <input type="password" name="confirm_password" class="form-control" id="confirm_password" />
              </label>
            </div>
          </div>

          <div id="bttSeparation">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      <pre id='output'>Values in Json</pre>
    </body>
  )
}

export default User;