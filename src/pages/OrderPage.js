import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Orders from "../components/Orders/Orders";

export default function OrderPage() {
    return (
        <div>
            <NavBar variant={"dark"} bg={"dark"} />
            <Orders />
            <Footer />
        </div>
    );
}
