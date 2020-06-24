import React from "react";
import "./Style.css";

export function MenuItems(props) {
    return (
        <div className="MenuItems">
            <p>Item Id: {props.item.id}</p>
            <p>{props.item.userId}</p>
            <p>Item Name: {props.item.title}</p>
            <button>Add to Cart</button>
        </div>
    );
}
