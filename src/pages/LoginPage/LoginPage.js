import React from "react";
import { NavBar } from "../../components/StaticComponents/NavBar/NavBar";
import Footer from "../../components/StaticComponents/Footer/Footer";
import Login from "../../components/Forms/Login/Login";
// import "./Style.css";
// import background from "../../images/wheat.png";

const background =
    "https://images.unsplash.com/photo-1592232610506-9426553027d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const styles = {
    backgroundImage: `url(${background})`,

    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
};

export default function LoginPage() {
    return (
        <div style={styles}>
            <NavBar variant={"dark"} />
            <Login />
            <Footer />
        </div>
    );
}
