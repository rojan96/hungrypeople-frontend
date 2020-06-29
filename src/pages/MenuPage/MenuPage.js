import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";

const isLoggedIn = true;
const logoSize = 100;

export default function MenuPage({ match }) {
    return (
        <div>
            <NavBar
                variant={"dark"}
                isLoggedIn={isLoggedIn}
                logoSize={logoSize}
            />
            <Menu businessId={match.params.businessId} />
            <Footer />
        </div>
    );
}
