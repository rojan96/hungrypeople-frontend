import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import "../../App/Style.css";

const CartItem = ({ text, index, getTotal }) => {
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
                        getTotal();
                        if (quantity >= 1) {
                            setQuantity(parseInt(quantity) + 1);
                        }
                    }}
                />
                <h4>{quantity}</h4>

                <RemoveCircleOutlineIcon
                    onClick={() => {
                        getTotal();
                        if (quantity > 1) setQuantity(parseInt(quantity) - 1);
                    }}
                />

                <DeleteOutlineOutlinedIcon />
            </div>
        </ListItem>
    );
};

export default CartItem;
