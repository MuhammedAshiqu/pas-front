import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { DataContext } from "../../Context/Context";
function ViewService() {
  const { Users, AdminTrue, Cartcount } = useContext(DataContext);
  const [adminTrue, setadminTrue] = AdminTrue;

  const [data, setdata] = useState([]);
  const getServices = () => {
    axios.get("ttps://productsandservices.herokuapp.com/viewService").then((response) => {
      console.log(response);
      setdata(response.data.service);
    });
  };
  useEffect(() => {
    setadminTrue(false);
    getServices();
  }, []);

  return (
    <div>
      <div className="main-i">
        <table class="styled-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th> Name</th>
              <th> Email</th>
              <th> Job</th>
              <th>Location</th>
              <th>Contact</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((i,key) => (
              <tr>
                <td>{key+1}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.item}</td>
                <td>{i.location}</td>
                <td>{i.contact}</td>

                {/* <td><button onClick={()=>deleteUser(i._id)}  className='btn btn-danger' >Delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewService;
