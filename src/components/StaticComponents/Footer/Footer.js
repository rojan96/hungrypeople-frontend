import React from "react";
import "./Footer.css";

export default function Footer(props) {
    const style = {
        textAlign: "center",
        marginTop: "auto",
        padding: 40,
        fontFamily: "Just Another Hand",
        width: "100%",
        fontSize: 40,
        color: "#d2dae2",
        backgroundColor: props.bg ? props.bg : "none",
    };

    return (
        <div style={style}>
            <p>Copyright 2020 HungryPeople</p>
            <p>All rights reserved.</p>
        </div>
    );
}
