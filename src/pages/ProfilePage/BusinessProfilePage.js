import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";

import "./Style.css";
import BusinessProfile from "../../components/Profile/BusinessProfile/BusinessProfile";

const style = {
    textAlign: "center",
    margin: 0,
    padding: 20,
    fontFamily: "Just Another Hand",
    display: "flex",
    justifyContent: "center",
};

export default function BusinessProfilePage({ match }) {
    console.log(match);
    return (
        <div>
            <NavBar variant={"dark"} />
            <div style={style}>
                <div>
                    <BusinessProfile />
                    <Menu businessId={match.params.businessId} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
