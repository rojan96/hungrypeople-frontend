import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import { AuthContext } from "../../../context/auth";
import { Button, Modal, Row, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getBusinessInfo } from "../../../util/HPserver";
import EditForm from "../EditProfile";
import EditIcon from "@material-ui/icons/Edit";

export default function BusinessProfile() {
    const { user } = useContext(AuthContext);
    const [businessInfo, setBusinessInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchData() {
            const businessInfo = await getBusinessInfo(user);
            console.log(businessInfo);
            businessInfo
                ? setBusinessInfo(businessInfo)
                : alert("Something went wrong bruh");
        }
        fetchData();
    }, [businessInfo]);

    return (
        <div className="profileContainer">
            <div className="profileDiv">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <div clasName="profilePicture">
                                <img
                                    src={businessInfo.profilePicture}
                                    alt="User Profile"
                                    style={{ height: 200 }}
                                />
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary" onClick={handleShow}>
                                <EditIcon />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Welcome, {businessInfo.fullName}</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="accountInfoDiv">
                <h4>Your account information</h4>
                <hr />
                <p>ID: {businessInfo.id}</p>
                <p>Name: {businessInfo.fullName}</p>
                <p>Email: {businessInfo.email} </p>
                <p>Address: {businessInfo.address}</p>
                <p>Phone Number: {businessInfo.phone}</p>
            </div>

            <div>
                <Link to="/addMenuItem">
                    <Button variant="dark" block>
                        <h2>Edit Menu</h2>
                    </Button>
                </Link>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Username</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm
                            business={businessInfo}
                            handleClose={this.handleClose}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}
