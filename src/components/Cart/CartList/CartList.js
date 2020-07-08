import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import CartItem from "../CartItem/CartItem";
import "../Style.css";
import { Row, Col, Button } from "react-bootstrap";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import { getCart, postOrder } from "../../../util/HPserver";
import { AuthContext } from "../../../context/auth";
import { notify } from "../../../util/Toast";

const useStyles = makeStyles({
    list: {
        width: 400,
    },
    fullList: {
        width: "auto",
    },
});

const CartList = ({ anchor, toggleDrawer }) => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        async function fetchCart() {
            let cartListItems = await getCart(user);
            getTotal(cartListItems);
            setCart(cartListItems);

            // alert(cart);
        }
        fetchCart();
    }, []);

    const [total, setTotal] = useState(0);
    // useEffect(() => {
    //     getTotal();
    // }, [total]);

    const getTotal = async (cart) => {
        let totalPrice = 0;
        console.log(cart);
        for (let item of cart) {
            console.log(item);
            const price = isNaN(parseInt(item.price))
                ? 0
                : parseInt(item.price);
            totalPrice += price;
        }
        setTotal(totalPrice);
    };

    const classes = useStyles();
    // const cartListItems = [
    //     { name: "Veg Momo", price: "400", store: "Momo pasal" },
    //     { name: "Buff Momo", price: "400", store: "Momo pasal" },
    //     { name: "Clicken Momo", price: "400", store: "Momo pasal" },
    //     { name: "Chowmien", price: "350", store: "Chowmien pasal" },
    //     { name: "Sekuwa", price: "300", store: "Sekuwa pasal" },
    //     { name: "Buff Chowmien", price: "300", store: "Chowmien pasal" },
    // ];

    // let stores = {};
    // let storeNames = [];
    // if (cart) {
    //     for (let item of cart) {
    //         if (item.store in stores) {
    //             stores[item.store].push(item);
    //         } else {
    //             stores[item.store] = [];
    //             stores[item.store].push(item);
    //             storeNames.push(item.store);
    //         }
    //     }
    // }

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
                            <ArrowBackIosOutlinedIcon
                                onClick={toggleDrawer("right", false)}
                            />
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
                        {cart.map((item) => (
                            <CartItem text={item} key={item.id} />
                        ))}
                    </List>
                    {/* <List>
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
                    </List> */}
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h3 className="total">Total: ${total}</h3>
                <Button
                    variant="secondary"
                    onClick={async () => {
                        const orderStatus = await postOrder(user);
                        if (orderStatus) {
                            notify(`👋 Successfully Posted Order`, true);
                        } else {
                            notify("👎 Something Went Wrong.");
                        }
                    }}
                >
                    Place Order
                </Button>
            </div>
        </div>
    );
};

export default CartList;
