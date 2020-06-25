import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import OrderItems from "./OrderItems/OrderItems";

const divStyles = {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
};

function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/orders/`,
        {
          headers: {
            Authorization: user,
          },
        }
      )
      .then((data) => {
        setOrders(data.data.content);
      });
  }, []);

  try {
    return (
      <div style={divStyles}>
        {orders.map((order) => (
          <div>
            <h1> Order Number: {order.id}</h1>
            <div>
              <OrderItems key={order.id} id={order.id} />
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div> Nothing found. </div>;
  }
}

export default Orders;
