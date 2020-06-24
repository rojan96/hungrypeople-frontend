import React, {useState, useMemo, useContext} from 'react';
import {NavBar} from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Orders from "../Components/Orders/Orders";
import Container from "@material-ui/core/Container";
import { JumboHeader } from "../Components/JumboHeader/JumboHeader";
import { HowItWorks } from "../Components/HowItWorks/HowItWorks";
import { WhatWeDo } from "../Components/WhatWeDo/WhatWeDo";
import { RecommendedBusinesses } from "../Components/Business/RecommendedBusinesses/RecommendedBusinesses";
import { AuthContext } from '../context/auth';

const logoSize = 100;
const styles = {
    color: "lightgray",
    fontFamily: "Just Another Hand",
    backgroundColor: "#40739e",
    maxWidth: "none",
};
export default function HomePage() {
    const {user} = useContext(AuthContext);
    const isLoggedIn = user ? true : false;

    return (
        <div>
            <Container
                            style={styles}
                            className="intro-section"
                            fluid="true"
                        >
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