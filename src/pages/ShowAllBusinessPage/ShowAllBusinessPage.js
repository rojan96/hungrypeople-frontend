import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Business/ShowAllBusiness/ShowAllBusiness";
import BackgroundPattern from "../../images/kale-salad.jpg";

const styles = {
    backgroundImage: `url(${BackgroundPattern})`,
    // backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};

export default function ShowAllBusinessPage() {
    return (
        <div style={styles}>
            <NavBar variant="light" />
            <Search />
            <Footer />
        </div>
    );
}
