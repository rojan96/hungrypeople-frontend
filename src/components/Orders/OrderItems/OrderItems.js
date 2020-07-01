import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import axios from "axios";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function OrderItems(props) {
    const { user } = useContext(AuthContext);
    const [orderItems, setOrderItems] = useState([]);

    const getSum = (orderItems) => {
        let sum = 0;
        orderItems.forEach((element) => {
            let val = parseInt(element.price);
            if (isNaN(val)) {
                val = 0;
            }
            sum = sum + val;
        });
        return sum;
    };

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/orders/${props.id}/orderItems`,
                {
                    headers: {
                        Authorization: user,
                    },
                }
            )
            .then((data) => {
                // console.log("here");
                setOrderItems(data.data.content);
                props.handleItemCount(data.data.content.length);
                props.handleTotalPrice(getSum(data.data.content));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    try {
        return orderItems.map((orderItem) => (
            <TableRow key={orderItem.id}>
                <TableCell component="th" scope="row">
                    {orderItem.name}
                </TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">{orderItem.price}</TableCell>
            </TableRow>
        ));
    } catch (error) {
        return <div> Nothing found. </div>;
    }
}

export default OrderItems;
