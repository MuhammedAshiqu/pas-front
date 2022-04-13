import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Allorders.css";

function Allorders() {
  const [data, setdata] = useState([]);
  const getAllorders = () => {
    axios.get("http://localhost:8008/admin/all-orders").then((response) => {
      console.log(response);
      setdata(response.data.orders);
    });
  };

  useEffect(() => {
    getAllorders();
  }, []);

  return (
    <div>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Order id</th>
              <th>Mode of Payment</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{i.orderObject.date}</td>
                <td>{i.orderObject.paymentMethod}</td>
                <td>{i.orderObject.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allorders;
