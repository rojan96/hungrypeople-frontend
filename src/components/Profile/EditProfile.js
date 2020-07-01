import React, { useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { updateBusiness } from "../../util/HPserver";
import { AuthContext } from "../../context/auth";

export const EditBusiness = ({ business, handleClose, onUpdateBusiness }) => {
    const [id] = useState(business.id);
    const [bFullName, setBFullName] = useState(business.bFullName);
    const [bEmail, setBEmail] = useState(business.bEmail);
    const [bCoverPictureUrl, setBCoverPictureUrl] = useState(
        business.bCoverPictureUrl
    );
    const [bAddress, setBAddress] = useState(business.bAddress);
    const [bPhone, setBPhone] = useState(business.bPhone);
    const [bDescription, setBDescription] = useState(business.bDescription);
    const [bTags, setBTags] = useState(business.bTags);
    const [bCategories, setBCategories] = useState(business.bCategories);
    const { user } = useContext(AuthContext);

    function getString(bList) {
        let newString = "";
        bList.forEach((element) => {
            newString = newString + " " + element;
        });
        return newString;
    }

    return (
        <Form style={{ color: "black" }}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={bEmail}
                        onChange={(e) => setBEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        defaultValue={bPhone}
                        onChange={(e) => setBPhone(e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    defaultValue={bAddress}
                    onChange={(e) => setBAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formFullName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                    defaultValue={bFullName}
                    onChange={(e) => setBFullName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formCoverPictureUrl">
                <Form.Label>Profile Picture Url</Form.Label>
                <Form.Control
                    defaultValue={bCoverPictureUrl}
                    onChange={(e) => setBCoverPictureUrl(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    defaultValue={bDescription}
                    onChange={(e) => setBDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formTags">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                    defaultValue={getString(bTags)}
                    onChange={(e) => setBTags(e.target.value.split(" "))}
                />
            </Form.Group>

            <Form.Group controlId="formCategories">
                <Form.Label>Categories</Form.Label>
                <Form.Control
                    defaultValue={getString(bCategories)}
                    onChange={(e) => setBCategories(e.target.value.split(" "))}
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
                        bDescription: bDescription,
                        bTags: bTags,
                        bCategories: bCategories,
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
                    handleClose();
                }}
            >
                Submit
            </Button>
        </Form>
    );
};
