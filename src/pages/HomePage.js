import React, { useContext } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "@material-ui/core/Container";
import { JumboHeader } from "../components/JumboHeader/JumboHeader";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { WhatWeDo } from "../components/WhatWeDo/WhatWeDo";
import { RecommendedBusinesses } from "../components/Business/RecommendedBusinesses/RecommendedBusinesses";
import { AuthContext } from "../context/auth";
// import BackgroundPattern from "../images/pinkdust.png";

const logoSize = 100;
const styles = {
    color: "lightgray",
    fontFamily: "Just Another Hand",
    // backgroundImage: `url(${BackgroundPattern})`,
    backgroundColor: "#487eb0",
    maxWidth: "none",
};
export default function HomePage() {
    const { user } = useContext(AuthContext);
    const isLoggedIn = user ? true : false;

    return (
        <div>
            <Container style={styles} className="intro-section" fluid="true">
                <NavBar
                    variant={"dark"}
                    isLoggedIn={isLoggedIn}
                    logoSize={logoSize}
                />
                <JumboHeader />
            </Container>
            <WhatWeDo />
            <HowItWorks />
            <RecommendedBusinesses />
            <Footer />
        </div>
    );
}
