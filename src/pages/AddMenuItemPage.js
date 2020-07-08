import React from "react";
import AddMenuItem from "../components/Forms/AddMenuItem/AddMenuItem";
import Footer from "../components/StaticComponents/Footer/Footer";
import { NavBar } from "../components/StaticComponents/NavBar/NavBar";

export default function AddMenuItemPage() {
    return (
        <div>
            <NavBar variant={"dark"} />
            <AddMenuItem />
            <Footer />
        </div>
    );
}
