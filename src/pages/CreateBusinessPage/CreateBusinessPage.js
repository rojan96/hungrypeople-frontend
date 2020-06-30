import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { CreateBusiness } from "../../components/Business/CreateBusiness/CreateBusiness";

const background =
    "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80";
const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};

export default function CreateBusinessPage() {
    return (
        <div style={styles}>
            <NavBar variant={"dark"} />
            <CreateBusiness />
            <Footer />
        </div>
    );
}
