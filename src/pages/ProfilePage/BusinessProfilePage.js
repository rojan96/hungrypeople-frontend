import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Orders from "../../components/Orders/Orders";
import "./Style.css";
import BusinessProfile from "../../components/Profile/BusinessProfile/BusinessProfile";

const style = {
    textAlign: "center",
    margin: 0,
    padding: 20,
    fontFamily: "Just Another Hand",
    display: "flex",
};
const isLoggedIn = true;
const logoSize = 100;

export default function BusinessProfilePage() {
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
                </div>
            </div>
            <Footer />
        </div>
    );
}
