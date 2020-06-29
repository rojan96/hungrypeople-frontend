import React from "react";
import AddMenuItem from "../components/AddMenuItem/AddMenuItem";
import Footer from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";

const isLoggedIn = true;
const logoSize = 100;

export default function AddMenuItemPage() {
    return (
        <div>
            <NavBar
                variant={"dark"}
                bg={"dark"}
                isLoggedIn={isLoggedIn}
                logoSize={logoSize}
            />
            <AddMenuItem />
            <Footer />
        </div>
    );
}
