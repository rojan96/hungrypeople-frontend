import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/StaticComponents/NavBar/NavBar";
import Footer from "../../components/StaticComponents/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import "../../components/App/Style.css";
import { getBusinessById } from "../../util/HPserver";

export default function MenuPage({ match }) {
    const [business, setBusiness] = useState({});

    useEffect(() => {
        async function fetchData() {
            const businessInfo = await getBusinessById(match.params.businessId);
            setBusiness(businessInfo);
        }
        fetchData();
    }, []);

    return (
        <div>
            <NavBar variant={"dark"} />
            <h1 className="HeadingLight">{business.bFullName} Menu</h1>
            <Menu businessId={match.params.businessId} />
            <Footer />
        </div>
    );
}
