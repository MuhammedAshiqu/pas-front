import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
// import "./Change.css";
import { Table } from "react-bootstrap";

function Change() {
  const [ref, setref] = useState(false);
  // const { sellers, Cartcount, sellerTrue } = useContext(DataContext)
  //   const [sellerTrue, setsellerTrue] = sellerTrue;
  const [items, setitems] = useState([]);

  const getsellerdetails = () => {
    axios.get("http://localhost:8008/seller/").then((response) => {
      console.log(response);
      setitems(response.data.shop);
    });
  };

  const deleteItem = (id) => {
    alert("deleted");
    axios
      .post(`http://localhost:8008/seller/delete-product/${id}`)
      .then((res) => {
        console.log(res);
        setref(true);
        setref(false);
      });
  };

  const deleteAllItem = () => {
    alert("deleted");

    axios
      .get("http://localhost:8008/seller/delete-all-products")
      .then((res) => {
        console.log(res);
        setref(true);
        setref(false);
      });
  };

  useEffect(() => {
    getsellerdetails();
    // setsellerTrue(true);
  }, [ref]);
  return (
    <div className="main-i">
      <>
      <table className="styled-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Uploaded</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i,key) => (
              <tr>
                <td>{key+1}</td>
                <td>{i?.Name}</td>
                <td>{i?.Phone}</td>
                <td>{i?.CreatedBy}</td>
                <td>
                  <button
                    onClick={() => deleteItem(i._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      :<div className="no-item mt-4"></div>


      
      {/* <div>
    <table className="styled-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>mail id</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {getsellerdetails.map((i, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{i.Name}</td>
              <td>{i.Email}</td>

              <td>
                <button
                  onClick={() => deleteItem(i._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* try */}
    {/* </div>  */}
    </div>
  );
}

export default Change;
