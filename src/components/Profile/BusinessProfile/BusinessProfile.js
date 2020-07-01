import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import { AuthContext } from "../../../context/auth";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getBusinessInfo } from "../../../util/HPserver";
import { EditBusiness } from "../EditProfile";
import EditIcon from "@material-ui/icons/Edit";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function BusinessProfile() {
    const { user } = useContext(AuthContext);
    const [businessInfo, setBusinessInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchData() {
            const businessInfo = await getBusinessInfo(user);
            businessInfo
                ? setBusinessInfo(businessInfo)
                : alert("Something went wrong bruh");
        }
        fetchData();
    }, []);

    const updateBusiness = (business) => {
        setBusinessInfo(business);
    };

    return (
        <div className="profileContainer">
            <div className="profileDiv">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className="profilePicture">
                                <img
                                    src={businessInfo.bCoverPictureUrl}
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
                <p>Name: {businessInfo.bFullName}</p>
                <p>Email: {businessInfo.bEmail} </p>
                <p>Address: {businessInfo.bAddress}</p>
                <p>Phone Number: {businessInfo.bPhone}</p>
                <p>Description: {businessInfo.bDescription}</p>
                <p> Tags: </p>
                {businessInfo.bTags ? (
                    <ul>
                        {businessInfo.bTags.map((tag) => (
                            <li>{tag}</li>
                        ))}
                    </ul>
                ) : (
                    <li>No tags yet.</li>
                )}
                <p>Categories:</p>
                {businessInfo.bCategories ? (
                    <ul>
                        {businessInfo.bCategories.map((tag) => (
                            <li>{tag}</li>
                        ))}
                    </ul>
                ) : (
                    <li>No categories yet.</li>
                )}
            </div>

            <div>
                <Link to="/addMenuItem">
                    <Button variant="dark" block>
                        <h2>Edit Menu</h2>
                    </Button>
                </Link>

                <Modal show={show} onHide={handleClose}>
                    <ModalHeader closeButton>
                        <ModalTitle>Edit business</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <EditBusiness
                            business={businessInfo}
                            handleClose={handleClose}
                            onUpdateBusiness={updateBusiness}
                        />
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}
