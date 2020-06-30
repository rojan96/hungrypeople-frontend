import React, { Component, useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { updateBusiness } from "../../util/HPserver";
import { AuthContext } from "../../context/auth";

const EditFOrm = ({ business, handleclose, onUpdateBusiness }) => {
    const [id, setBId] = useState(business.id);
    const [bEmail, setBEmail] = useState(business.bEmail);
    const [bPhone, setBPhone] = useState(business.bPhone);
    const [bAddress, setBAddress] = useState(business.bAddress);
    const [bFullName, setBFullName] = useState(business.bFullName);
    const [bCoverPictureUrl, setBCoverPictureUrl] = useState(
        business.bCoverPictureUrl
    );
    const [bPreference, setBPreference] = useState(business.setBPreference);
    const { user } = useContext(AuthContext);
    return (
        <Form style={{ color: "black" }}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={business.bEmail}
                        onChange={(e) => setBEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        defaultValue={business.bPhone}
                        onChange={(e) => setBPhone(e.target.value)}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    defaultValue={business.bAddress}
                    onChange={(e) => setBAddress(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formFullName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                    defaultValue={business.bFullName}
                    onChange={(e) => setBFullName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formCoverPictureUrl">
                <Form.Label>Profile Picture Url</Form.Label>
                <Form.Control
                    defaultValue={business.bCoverPictureUrl}
                    onChange={(e) => setBCoverPictureUrl(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPreference">
                <Form.Label>Preference</Form.Label>
                <Form.Control
                    defaultValue={business.bPreference}
                    onChange={(e) => setBPreference(e.target.value)}
                />
            </Form.Group>

            <Button
                variant="primary"
                onClick={async () => {
                    const businessInfo = {
                        id: id,
                        bEmail: bEmail,
                        bPhone: bPhone,
                        bAddress: bAddress,
                        bFullName: bFullName,
                        bCoverPictureUrl: bCoverPictureUrl,
                        bPreference: bPreference,
                    };
                    onUpdateBusiness(businessInfo);
                    const editBusiness = await updateBusiness(
                        user,
                        businessInfo
                    );
                    if (editBusiness === "success") {
                        alert(`Business edited successfully.`);
                    } else {
                        alert(`Edit failed.`);
                    }
                }}
            >
                Submit
            </Button>
        </Form>
    );
};

export default EditFOrm;
