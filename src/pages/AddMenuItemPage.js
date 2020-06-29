import React from "react";
import AddMenuItem from "../components/AddMenuItem/AddMenuItem";
import Footer from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";

export default function AddMenuItemPage() {
    return (
        <div>
            <NavBar variant={"dark"} />
            <AddMenuItem />
            <Footer />
        </div>
    );
}
