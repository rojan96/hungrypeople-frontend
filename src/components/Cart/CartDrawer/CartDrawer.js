import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import CartList from "../CartList/CartList";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const CartDrawer = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <React.Fragment key={"right"}>
            <Button onClick={toggleDrawer("right", true)}>
                <ShoppingCart
                    className="nav-link hvr-buzz-out"
                    style={{ fontSize: 50 }}
                />
            </Button>
            <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                <CartList toggleDrawer={toggleDrawer} />
            </SwipeableDrawer>
        </React.Fragment>
    );
};

export default CartDrawer;
