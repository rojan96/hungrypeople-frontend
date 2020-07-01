import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { getUserInfo, getBusinessInfo } from "../../../util/HPserver";
import { EditUser } from "../EditProfile";
import "./UserProfile.css";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function UserProfile() {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});
    const [businessInfo, setBusinessInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateUser = (userInfo) => {
        setUserInfo(userInfo);
    };

    useEffect(() => {
        async function fetchData() {
            const userInfo = await getUserInfo(user);
            const businessInfo = await getBusinessInfo(user);
            setBusinessInfo(businessInfo);
            setUserInfo(userInfo);
        }
        fetchData();
    }, []);

    return (
        <div className="profileContainer">
            <div className="profileDiv">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className="profilePicture">
                                <img
                                    src={userInfo.profilePictureUrl}
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
                            <h3>Welcome, {userInfo.username}</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="accountInfoDiv">
                <h4>Your account information</h4>
                <hr />
                <p>First Name: {userInfo.firstName}</p>
                <p>Last Name: {userInfo.lastName}</p>
                <p>Email: {userInfo.email} </p>
                <p>Address: {userInfo.address}</p>
                <p>Phone Number: {userInfo.phone}</p>
                <p>Preference: {userInfo.preference}</p>
            </div>
            <div>
                {businessInfo ? (
                    <Link to={`/businessProfile/${businessInfo.id}`}>
                        <Button variant="dark" block>
                            <h2>Business Profile</h2>
                        </Button>
                    </Link>
                ) : (
                    <Link to="/createBusiness">
                        <Button variant="dark" block>
                            <h2>Create a Business</h2>
                        </Button>
                    </Link>
                )}
            </div>
            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle>Edit user</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <EditUser
                        userInfo={userInfo}
                        handleClose={handleClose}
                        onUpdateUser={updateUser}
                    />
                </ModalBody>
            </Modal>
        </div>
    );
}
