import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "@material-ui/core/Container";
import { JumboHeader } from "../components/JumboHeader/JumboHeader";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { WhatWeDo } from "../components/WhatWeDo/WhatWeDo";
import { RecommendedBusinesses } from "../components/Business/RecommendedBusinesses/RecommendedBusinesses";
import CarouselComponent from "../components/Carousel/Carousel";

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
            <CarouselComponent />
            <Footer bg={"#2f3542"} />
        </div>
    );
}
