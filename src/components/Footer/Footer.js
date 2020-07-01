import React from "react";
import "./Footer.css";

const style = {
    textAlign: "center",
    marginTop: "auto",
    padding: 20,
    fontFamily: "Just Another Hand",
    width: "100%",
    fontSize: 40,
    color: "white",
};

export default function Footer() {
    return (
        <div style={style}>
            <p>Copyright 2020 HungryPeople</p>
            <p>All rights reserved.</p>
        </div>
    );
}
