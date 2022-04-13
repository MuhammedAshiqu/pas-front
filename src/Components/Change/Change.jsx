import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./Change.css";
import { DataContext } from "../../Context/Context";
import { Table } from "react-bootstrap";

function Change() {
  const [ref, setref] = useState(false);
  const { Users, Cartcount, AdminTrue } = useContext(DataContext);
  const [adminTrue, setadminTrue] = AdminTrue;
  const [items, setitems] = useState([]);
  const getAdmindetails = () => {
    axios.get("ttps://productsandservices.herokuapp.com/admin/").then((response) => {
      console.log(response);
      setitems(response.data.products);
    });
  };
  const deleteItem = (id) => {
    alert("deleted");
    axios
      .post(`ttps://productsandservices.herokuapp.com/admin/delete-product/${id}`)
      .then((res) => {
        console.log(res);
        setref(true);
        setref(false);
      });
  };
  const deleteAllItem = () => {
    alert("deleted");

    axios.get("ttps://productsandservices.herokuapp.com/admin/delete-all-products").then((res) => {
      console.log(res);
      setref(true);
      setref(false);
    });
  };
  useEffect(() => {
    getAdmindetails();
    setadminTrue(true);
  }, [ref]);
  return (
    <div className="main-i">
      {/* try */}

      <table className="styled-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Uploaded</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i, key) => (
            <tr>
              <td>{key + 1} </td>
              <td>{i.Name}</td>
              <td>{i.Price}</td>
              <td>{i.CreatedBy}</td>
              <td>
                {/* <button onClick={() => deleteItem(i._id)} className="btn-primary" > Edit</button> */}
                <button onClick={() => deleteItem(i._id)} className="btn-danger" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* try */}
    </div>
  );
}

export default Change;
