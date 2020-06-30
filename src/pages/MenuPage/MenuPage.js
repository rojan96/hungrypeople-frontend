import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";

export default function MenuPage({ match }) {
    return (
        <div>
            <NavBar variant={"dark"} />
            <Menu businessId={match.params.businessId} />
            <Footer />
        </div>
    );
}
