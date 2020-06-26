import React, { useContext } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Business/ShowAllBusiness/ShowAllBusiness";
import { AuthContext } from "../../context/auth";
// import "./Style.css";
import BackgroundPattern from "../../images/wheat.png";

const logoSize = 100;
// const background =
//     "https://images.unsplash.com/photo-1572851899307-3c130a64e831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const styles = {
    backgroundImage: `url(${BackgroundPattern})`,
    // backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};

export default function ShowAllBusinessPage() {
    const { user } = useContext(AuthContext);
    const isLoggedIn = user ? true : false;
    return (
        <div style={styles}>
            <NavBar
                variant="dark"
                isLoggedIn={isLoggedIn}
                logoSize={logoSize}
            />
            <Search />
            <Footer />
        </div>
    );
}
