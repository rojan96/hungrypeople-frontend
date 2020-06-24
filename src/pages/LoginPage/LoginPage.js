import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
// import "./Style.css";

const isLoggedIn = false;
const logoSize = 100;
const background =
    "https://images.unsplash.com/photo-1572851899307-3c130a64e831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};

export default function LoginPage() {
    return (
        <div style={styles}>
            <NavBar
                variant={"dark"}
                isLoggedIn={isLoggedIn}
                logoSize={logoSize}
            />
            <Login />
            <Footer />
        </div>
    );
}
