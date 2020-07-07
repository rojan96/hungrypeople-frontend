import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import "../../App/Style.css";

const CartItem = ({ text, index }) => {
    const [quantity, setQuantity] = useState("1");
    return (
        <ListItem button key={index}>
            <ListItemIcon>
                <FastfoodOutlinedIcon />
            </ListItemIcon>
            <ListItemText
                primary={text.name}
                secondary={parseInt(text.price * quantity)}
            />
            <div style={{ display: "flex" }}>
                <AddCircleOutlineIcon
                    onClick={() => {
                        if (quantity >= 1) {
                            setQuantity(parseInt(quantity) + 1);
                        }
                    }}
                />
                <h4>{quantity}</h4>

                <RemoveCircleOutlineIcon
                    onClick={() => {
                        if (quantity > 1) setQuantity(parseInt(quantity) - 1);
                    }}
                />

                <DeleteOutlineOutlinedIcon />
            </div>
        </ListItem>
    );
};

export default CartItem;
