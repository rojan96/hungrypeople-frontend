import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import Footer from "../../components/Footer/Footer";
import Orders from "../../components/Orders/Orders";
import "./Style.css";
import background from "../../images/fancy-pants.jpg";

const style = {
    textAlign: "center",
    margin: 0,
    padding: 20,
    fontFamily: "Just Another Hand",
    display: "flex",
};
const isLoggedIn = true;
const logoSize = 100;

export default function ProfilePage() {
    return (
        <div>
            <NavBar
                variant={"dark"}
                isLoggedIn={isLoggedIn}
                logoSize={logoSize}
            />
            <div style={style}>
                <div>
                    <UserProfile />
                </div>
                <Orders />
            </div>
            <Footer />
        </div>
    );
}
