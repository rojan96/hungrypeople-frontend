import React, {useContext, useEffect, useState} from 'react';
import Business from "../Business/Business";
import {AuthContext} from "../../context/auth";
import axios from "axios";


const divStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
}
function Orders() {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/${user.id}/orders/`, {
                auth: {
                    username: 'c',
                    password: 'c'
                }
            }
        );
        data.data.content.forEach(item => {
            const orderData = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/${user.id}/orders/`, {
                    auth: {
                        username: 'c',
                        password: 'c'
                    }
                }
            );
        });

        setItems(data.data.content);
    }

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