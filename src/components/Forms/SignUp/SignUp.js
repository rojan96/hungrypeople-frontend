import React, { useState } from "react";
import {
    Button,
    FormGroup,
    FormControl,
    FormLabel,
    Form,
    Col,
} from "react-bootstrap";
import "../Style.css";
import { Link, useHistory } from "react-router-dom";
import { postSignup } from "../../../util/HPserver";
import { notify } from "../../../util/Toast";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const history = useHistory();

    function validateForm() {
        return (
            email.length > 0 &&
            password.length > 0 &&
            username.length > 0 &&
            phone.length
        );
    }

    return (
        <div className="SignupPage">
            <div className="InnerSignup">
                <Form>
                    <h2>Sign up for HungryPeople</h2>
                    <hr />
                    <Form.Row>
                        <FormGroup
                            as={Col}
                            md="6"
                            controlId="firstname"
                            bsSize="large"
                        >
                            <FormLabel>First Name</FormLabel>
                            <FormControl
                                className="TextInput"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="firstname"
                            />
                        </FormGroup>

                        <FormGroup
                            as={Col}
                            md="6"
                            controlId="lastname"
                            bsSize="large"
                        >
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                                className="TextInput"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="lastname"
                            />
                        </FormGroup>
                    </Form.Row>

                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            className="TextInput"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>

                    <Form.Row>
                        <FormGroup
                            as={Col}
                            md="6"
                            controlId="username"
                            bsSize="large"
                        >
                            <FormLabel>Username</FormLabel>
                            <FormControl
                                className="TextInput"
                                autoFocus
                                type="userName"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup
                            as={Col}
                            md="6"
                            controlId="password"
                            bsSize="large"
                        >
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                className="TextInput"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                        </FormGroup>
                    </Form.Row>

                    <FormGroup controlId="phone" bsSize="large">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl
                            className="TextInput"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="phone"
                        />
                    </FormGroup>

                    <FormGroup controlId="address" bsSize="large">
                        <FormLabel>Address</FormLabel>
                        <FormControl
                            className="TextInput"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="address"
                        />
                    </FormGroup>

                    <FormGroup controlId="profilepicture" bsSize="large">
                        <FormLabel>Profile Picture URL</FormLabel>
                        <FormControl
                            className="TextInput"
                            value={profilePicture}
                            onChange={(e) => setProfilePicture(e.target.value)}
                            type="profilepicture"
                        />
                    </FormGroup>
                    <Button
                        variant="light"
                        block
                        bsSize="large"
                        disabled={!validateForm()}
                        onClick={async () => {
                            const userInfo = {
                                username: username,
                                password: password,
                                phone: phone,
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                profilePictureUrl: profilePicture,
                                address: address,
                            };

                            const signedUp = await postSignup(userInfo);
                            if (signedUp === "success") {
                                notify(
                                    `👍 You  have successfully signed up!`,
                                    true
                                );
                                history.push("/login");
                            } else if (signedUp === "username_taken") {
                                notify(
                                    " 👎 Username already taken. Please try another one."
                                );
                            } else {
                                notify(`  👎Signup failed.`);
                            }
                        }}
                    >
                        Sign up
                    </Button>
                    <Link to="/login">
                        <p style={{ padding: 15 }}>Already have an account?</p>
                    </Link>
                </Form>
            </div>
        </div>
    );
}
