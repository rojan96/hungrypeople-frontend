import React from "react";
import { NavBar } from "../../components/StaticComponents/NavBar/NavBar";
import Footer from "../../components/StaticComponents/Footer/Footer";
import { CreateBusiness } from "../../components/Forms/CreateBusiness/CreateBusiness";

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
