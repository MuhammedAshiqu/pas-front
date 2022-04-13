import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import 'ShowShop.css'

function ShowShops() {
  const [ref, setref] = useState(false);
  const [allshops, setallshops] = useState([]);
  const getAllShops = () => {
    axios.get("ttps://productsandservices.herokuapp.com/admin/all-shops").then((result) => {
      console.log(result);
      setallshops(result.data.shops);
    });
  };
  const deleteShop = (id) => {
    let it = window.confirm("Are You Sure Delete ?");
    it &&
      axios.get(`ttps://productsandservices.herokuapp.com/admin/remove-shop/${id}`).then((res) => {
        console.log(res);
        setref(true);
        setref(false);
      });
  };

  useEffect(() => {
    getAllShops();
  }, [ref]);
  return (
<div>
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
          {allsellers.map((i, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{i.Name}</td>
              <td>{i.Email}</td>

              <td>
                <button
                  onClick={() => deleteShop(i._id)}
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
    </div>
  );
}

export default ShowShops;