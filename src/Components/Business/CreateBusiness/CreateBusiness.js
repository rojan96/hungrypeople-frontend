import React, { useState, useContext } from "react";
import {
    Button,
    FormControl,
    FormGroup,
    FormLabel,
    Form,
    Col,
} from "react-bootstrap";
import { createBusiness } from "../../../util/HPserver";
import { AuthContext } from "../../../context/auth";
import "./Style.css";

export const CreateBusiness = () => {
    const { user } = useContext(AuthContext);
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [coverPictureUrl, setCoverPictureUrl] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [tags, setTags] = useState([]);

    function validateForm() {
        return businessName.length > 0 && email.length > 0;
    }

    //   {
    //     "createdAt": "2020-06-18T23:05:38.957+00:00",
    //     "updatedAt": "2020-06-18T23:05:38.957+00:00",
    //     "id": 1,
    //     "fullName": null,
    //     "email": null,
    //     "coverPictureUrl": null,
    //     "address": null,
    //     "phone": null,
    //     "tags": []
    // }
    return (
        <div className="CreateBusinessPage">
            <div className="InnerCreateBusiness">
                <h1>Start a business.</h1>
                <FormGroup controlId="businessName">
                    <FormLabel>Business Name</FormLabel>
                    <FormControl
                        autoFocus
                        type="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                    />
                </FormGroup>

                <Form.Row>
                    <FormGroup as={Col} md="6" controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup as={Col} md="6" controlId="phone" bsSize="large">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="phone"
                        />
                    </FormGroup>
                </Form.Row>

                <FormGroup controlId="address" bsSize="large">
                    <FormLabel>Address</FormLabel>
                    <FormControl
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="address"
                    />
                </FormGroup>

                <FormGroup controlId="coverPictureUrl" bsSize="large">
                    <FormLabel>Cover Picture URL</FormLabel>
                    <FormControl
                        value={coverPictureUrl}
                        onChange={(e) => setCoverPictureUrl(e.target.value)}
                        type="profilepicture"
                    />
                </FormGroup>

                <FormGroup controlId="tags" bsSize="large">
                    <FormLabel>Tags</FormLabel>
                    <FormControl
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        type="tags"
                    />
                </FormGroup>

                <Button
                    block
                    disabled={!validateForm()}
                    onClick={async () => {
                        const businessInfo = {
                            bFullName: businessName,
                            bEmail: email,
                            bPhone: phone,
                            bAddress: address,
                            bCoverPictureUrl: coverPictureUrl,
                            bTags: tags.split(" "),
                        };
                        const business = await createBusiness(
                            businessInfo,
                            user
                        );
                        if (business) {
                            alert("Business Successfully Created.");
                        } else {
                            alert("Something went wrong...");
                        }
                    }}
                >
                    Create Business
                </Button>
            </div>
        </div>
    );
};
