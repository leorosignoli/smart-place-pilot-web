import React from 'react';
import './App.css';

function Group() {
  return (
    <div className="wrapper" >

      <form>
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

  )
}




export default Group;