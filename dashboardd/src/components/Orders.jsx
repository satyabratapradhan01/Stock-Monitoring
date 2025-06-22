import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrder").then((res) => {
      setAllOrder(res.data);
    })
  }, []);

  return (
    <div className="orders">
     
        <h3 className="title">Order ({allOrder.length}) </h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Cur. val</th>
              <th>Mode</th>
            </tr>

            {allOrder.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              )
            })}
          </table>

        </div>


        <Link to={"/"} className="btn ">
          Get started
        </Link>
   
    </div>
  );
};

export default Orders;
