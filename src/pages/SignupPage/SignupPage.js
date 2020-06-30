import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SignUp from "../../components/SignUp/SignUp";
// import "./Style.css";
// import background from "../../images/wheat.png";

// const isLoggedIn = false;
// const logoSize = 100;
const background =
    "https://images.unsplash.com/photo-1591099429149-58f65ccf2182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2125&q=80";

const styles = {
    backgroundImage: `url(${background})`,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};

export default function SignUpPage() {
    return (
        <div style={styles}>
            <NavBar variant={"dark"} />
            <SignUp />
            <Footer />
        </div>
    );
}
