import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SignUp from "../../components/SignUp/SignUp";
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

export default function SignUpPage() {
    return (
        <div style={styles}>
            <NavBar
                variant={"dark"}
                isLoggedIn={isLoggedIn}
                logoSize={logoSize}
            />
            <SignUp />
            <Footer />
        </div>
    );
}
