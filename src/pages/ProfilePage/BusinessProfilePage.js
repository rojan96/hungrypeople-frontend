import React, { useContext, useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { AuthContext } from "../../context/auth";
import { getBusinessInfo } from "../../util/HPserver";
import "./Style.css";
import BusinessProfile from "../../components/Profile/BusinessProfile/BusinessProfile";

const style = {
    textAlign: "center",
    margin: 0,
    padding: 20,
    fontFamily: "Just Another Hand",
    display: "flex",
    justifyContent: "center",
};
const isLoggedIn = true;
const logoSize = 100;

export default function BusinessProfilePage({ match }) {
    console.log(match);
    return (
        <div>
            <NavBar
                variant={"dark"}
                isLoggedIn={isLoggedIn}
                logoSize={logoSize}
            />
            <div style={style}>
                <div>
                    <BusinessProfile />
                    <Menu businessId={match.params.businessId} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
