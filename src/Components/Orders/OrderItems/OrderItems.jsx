import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import axios from "axios";

const divStyles = {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  margin: "2em",
  color: "black",
  padding: "2px",
};

function OrderItems(props) {
  const [orderItems, setOrderItems] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/${user.id}/orders/${props.id}/orderItems`,
        {
          auth: {
            username: "c",
            password: "c",
          },
        }
      )
      .then((data) => {
        setOrderItems(data.data.content);
      });
  };

  try {
    return (
      <div style={divStyles}>
        {orderItems.map((orderItem) => (
          <div className="card" style={divStyles}>
            <div>
              <p>
                <strong>Name: {orderItem.name}</strong>
              </p>
              <p>Description:{orderItem.description}</p>
              <p>Price: {orderItem.price}</p>
              <p>Category: {orderItem.category}</p>
            </div>
          </div>
        ))}
        <br></br>
      </div>
    );
  } catch (error) {
    return <div> Nothing found. </div>;
  }
}

export default OrderItems;
