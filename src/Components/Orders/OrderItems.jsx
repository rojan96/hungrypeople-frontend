import React, { useContext, useEffect, useState, state } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";

const divStyles = {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
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
          <div style={{ margin: 2 + "em" }}>
            <div>
              <h2>Item name: {orderItem.name}</h2>
            </div>
            <div>
              <h2>Item description:{orderItem.description}</h2>
            </div>
            <div>
              <h2>Item price: {orderItem.price}</h2>
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
