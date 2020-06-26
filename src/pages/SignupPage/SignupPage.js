import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SignUp from "../../components/SignUp/SignUp";
// import "./Style.css";
import background from "../../images/wheat.png";

const isLoggedIn = false;
const logoSize = 100;

const styles = {
    backgroundImage: `url(${background})`,
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
