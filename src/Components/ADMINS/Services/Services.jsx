import React from 'react'

function Services() {
  return (
    <div>
        <div className="main-i">
      {/* try */}
      <table class="styled-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Job</th>
            <th>Categiry</th>
            <th>Location</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {/* {allusers.map((i, index) => ( */}
            <tr>
              {/* <td>{index + 1}</td>
              <td>{i?.Name}</td>
              <td>{i?.Email}</td> */}
              <td>Index</td>
              <td>Name</td>
              <td>job</td>
              <td>Category</td>
              <td>Location</td>
              <td>
                <button className="btn-primary" >Edit</button>
                 <button className="btn-danger" >Delete</button>
              </td>
            </tr>
          {/* ))}  */}
        </tbody>
      </table>
      {/* try */}
    </div>
    </div>
  )
}

export default Services