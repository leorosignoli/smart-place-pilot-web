import React from 'react';
import './App.css';

function Group() {
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

        <form method='POST'>
          <div class="form-label" id="labelForm">
            <h2>Group</h2>
          </div>


          <div class="form-group">
            <label>
              Group Name</label>
            <input name="group" class="form-control" />

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




export default Group;