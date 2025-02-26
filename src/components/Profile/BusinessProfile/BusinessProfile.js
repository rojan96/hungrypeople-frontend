import React, { useContext, useEffect, useState } from "react";
import "../Style.css";
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
                        <Col xs={11} md={11}>
                            <div className="profilePicture">
                                <img
                                    src={businessInfo.bCoverPictureUrl}
                                    alt="User Profile"
                                    style={{ height: 500 }}
                                />
                            </div>
                        </Col>
                        <Col xs={1} md={1}>
                            <Button variant="secondary" onClick={handleShow}>
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
                    <p>
                        {businessInfo.bTags.map((tag) => (
                            <p>{tag} </p>
                        ))}
                    </p>
                ) : (
                    <p>No tags yet.</p>
                )}
                <p>Categories:</p>
                {businessInfo.bCategories ? (
                    <p>
                        {businessInfo.bCategories.map((tag) => (
                            <p>{tag}</p>
                        ))}
                    </p>
                ) : (
                    <p>No categories yet.</p>
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
