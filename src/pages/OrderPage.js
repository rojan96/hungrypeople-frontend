import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Orders from "../components/Orders/Orders";
import { Row, Col } from "react-bootstrap";

export default function OrderPage() {
    return (
        <div>
            <NavBar variant={"dark"} bg={"dark"} />
            <Row>
                <Col></Col>
                <Col md={6}>
                    <Orders />
                </Col>
                <Col></Col>
            </Row>

            <Footer />
        </div>
    );
}
