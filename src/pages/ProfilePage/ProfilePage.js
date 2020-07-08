import React from "react";
import { NavBar } from "../../components/StaticComponents/NavBar/NavBar";
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import Footer from "../../components/StaticComponents/Footer/Footer";
import Orders from "../../components/Orders/Orders";
import "./Style.css";
import { Row, Col } from "react-bootstrap";
// import background from "../../images/fancy-pants.jpg";

const style = {
    textAlign: "center",
    margin: 0,
    padding: 20,
    fontFamily: "Just Another Hand",
    display: "flex",
};

export default function ProfilePage() {
    return (
        <div>
            <NavBar variant={"dark"} />

            <Row style={style}>
                <Col md={5} sm={12}>
                    <UserProfile />
                </Col>
                <Col md={7} sm={12}>
                    <h1 className="OrdersHeading">Your orders:</h1>
                    <Orders />
                </Col>
            </Row>

            <Footer />
        </div>
    );
}
