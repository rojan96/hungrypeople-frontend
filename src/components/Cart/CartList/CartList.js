import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import CartItem from "../CartItem/CartItem";
import "../Style.css";
import Divider from "@material-ui/core/Divider";
import { FiVolumeX } from "react-icons/fi";
import { Row, Col, Button } from "react-bootstrap";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
const useStyles = makeStyles({
    list: {
        width: 500,
    },
    fullList: {
        width: "auto",
    },
});

const CartList = ({ anchor, toggleDrawer }) => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        getTotal();
    }, [total]);

    const getTotal = () => {
        let totalPrice = 0;
        for (let item of cartListItems) {
            totalPrice += parseInt(item.price);
        }
        setTotal(totalPrice);
    };

    const classes = useStyles();
    const cartListItems = [
        { name: "Veg Momo", price: "400", store: "Momo pasal" },
        { name: "Buff Momo", price: "400", store: "Momo pasal" },
        { name: "Clicken Momo", price: "400", store: "Momo pasal" },
        { name: "Chowmien", price: "350", store: "Chowmien pasal" },
        { name: "Sekuwa", price: "300", store: "Sekuwa pasal" },
        { name: "Buff Chowmien", price: "300", store: "Chowmien pasal" },
    ];

    let stores = {};
    let storeNames = [];
    if (cartListItems) {
        for (let item of cartListItems) {
            if (item.store in stores) {
                stores[item.store].push(item);
            } else {
                stores[item.store] = [];
                stores[item.store].push(item);
                storeNames.push(item.store);
            }
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
            }}
        >
            <div>
                <Row>
                    <Col xs={2}>
                        <Button variant="none">
                            <ArrowBackIosOutlinedIcon />
                        </Button>
                    </Col>
                    <Col xs={10}>
                        {" "}
                        <h2 className="cart-header">Cart Items</h2>
                    </Col>
                </Row>
                <div
                    className={clsx(classes.list, {
                        [classes.fullList]:
                            anchor === "top" || anchor === "bottom",
                    })}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                >
                    <List>
                        {storeNames.map((store) => (
                            <div>
                                <h2 className="store-name"> {store}</h2>
                                {stores[store].map((text, index) => (
                                    <CartItem
                                        text={text}
                                        index={index}
                                        key={index}
                                        getTotal={getTotal}
                                    />
                                ))}
                                <Divider />
                            </div>
                        ))}
                    </List>
                </div>
            </div>

            <h3 className="total">Total: ${total}</h3>
        </div>
    );
};

export default CartList;
