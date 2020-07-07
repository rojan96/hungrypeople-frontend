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
    return (
        <div>
            <NavBar variant={"dark"} />
            <div style={style}>
                <div>
                    <BusinessProfile />
                    <Menu businessId={match.params.businessId} edit={true} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
