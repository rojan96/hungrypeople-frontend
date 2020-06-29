import React, { useContext } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { AuthContext } from "../../context/auth";

const isLoggedIn = true;

export default function MenuPage({ match }) {
    const { user } = useContext(AuthContext);
    const isLoggedIn = user ? true : false;
    return (
        <div>
            <NavBar variant={"dark"} />
            <Menu businessId={match.params.businessId} />
            <Footer />
        </div>
    );
}
