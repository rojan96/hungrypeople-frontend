import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/auth";
import axios from "axios";


const divStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
}

function Orders() {
    const {user} = useContext(AuthContext);
    //
    // useEffect(() => {
    //     const orderIDs = fetchItems();
    //     console.log(fetchEachOrder(orderIDs));
    // }, []);
    //
    // const [items, setItems] = useState([]);
    //
    // const fetchItems = async () => {
    //     const data = await axios.get(
    //         `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/${user.id}/orders/`, {
    //             auth: {
    //                 username: 'c',
    //                 password: 'c'
    //             }
    //         }
    //     );
    //     return data.data.content;
    // }
    //
    // const fetchEachOrder = async (orderIDs) => {
    //     let orders = [];
    //     for (let orderID in orderIDs){
    //         console.log(orderID.id);
    //         const orderDataJson = await axios.get(
    //             `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/${user.id}/orders/${orderID.id}/orderItems/`, {
    //                 auth: {
    //                     username: 'c',
    //                     password: 'c'
    //                 }
    //             }
    //         );
    //         console.log(orderDataJson)
    //         orders.push(orderDataJson.content);
    //     }
    //
    //     setItems(orders);
    //     return orders;
    // }
    let items = {};
    try {
        return (
            <div style={divStyles}>
                {
                    items.map(item => (

                        <h2>{item.id}</h2>
                    ))
                }
            </div>
        );
    } catch (error) {
        return (<div> Nothing found. </div>);
    }
}

export default Orders;