import React, { Component, useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { updateBusiness } from "../../util/HPserver";
import { AuthContext } from "../../context/auth";

const EditFOrm = ({ business, handleclose }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [fullName, setFullName] = useState("");
    const [profilePictureUrl, setProfilePictureUrl] = useState("");
    const [preference, setPreference] = useState("");
    const { user } = useContext(AuthContext);
    console.log(business);
    return (
        <Form style={{ color: "black" }}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={business.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        defaultValue={business.phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    defaultValue={business.address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formFullName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                    defaultValue={business.fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formProfilePictureUrl">
                <Form.Label>Profile Picture Url</Form.Label>
                <Form.Control
                    defaultValue={business.profilePictureUrl}
                    onChange={(e) => setProfilePictureUrl(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPreference">
                <Form.Label>Preference</Form.Label>
                <Form.Control
                    defaultValue={business.preference}
                    onChange={(e) => setPreference(e.target.value)}
                />
            </Form.Group>

            <Button
                variant="primary"
                onClick={async () => {
                    const businessInfo = {
                        bEmail: email,
                        bPhone: phone,
                        bAddress: address,
                        bFullName: fullName,
                        bProfilePictureUrl: profilePictureUrl,
                        bPreference: preference,
                    };
                    const editBusiness = await updateBusiness(
                        user,
                        businessInfo
                    );
                    if (editBusiness === "success") {
                        alert(`Business edited successfully.`);
                    } else {
                        alert(`Edit failed.`);
                    }
                    handleclose();
                }}
            >
                Submit
            </Button>
        </Form>
    );
};

export default EditFOrm;
