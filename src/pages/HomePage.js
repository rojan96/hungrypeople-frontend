import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "@material-ui/core/Container";
import { JumboHeader } from "../components/JumboHeader/JumboHeader";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { WhatWeDo } from "../components/WhatWeDo/WhatWeDo";
import { RecommendedBusinesses } from "../components/Business/RecommendedBusinesses/RecommendedBusinesses";
// import { AuthContext } from "../context/auth";
// import BackgroundPattern from "../images/fancy-pants.jpg";

// const BackgroundPattern =
//     "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%231d183e' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%232d2948' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%233d3a53' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%234d4a5d' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%235d5b68' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%236d6c72' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%237d7d7d' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E";

//const logoSize = 100;
const styles = {
    color: "lightgray",
    fontFamily: "Just Another Hand",
    maxWidth: "none",
    backgroundColor: "#2f3542",
    // backgroundImage: `url(${BackgroundPattern})`,
    backgroundAttachment: "fixed",
};
export default function HomePage() {
    return (
        <div>
            <Container style={styles} className="intro-section" fluid="true">
                <NavBar variant={"dark"} />
                <JumboHeader />
            </Container>
            <WhatWeDo />
            <HowItWorks />
            <RecommendedBusinesses />
            <Footer />
        </div>
    );
}
