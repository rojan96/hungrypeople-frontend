
import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./SignUp.css";
import {Link, useHistory} from 'react-router-dom';
import {postSignup} from "../../util/HPserver";

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
        return email.length > 0 && password.length > 0 && username.length > 0 && phone.length;
    }


    return (
        <div className="SignUp">
            <form>
                <FormGroup controlId="firstname" bsSize="large">
                    <FormLabel>First Name</FormLabel>
                    <FormControl
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        type="firstname"
                    />
                </FormGroup>

                <FormGroup controlId="lastname" bsSize="large">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        type="lastname"
                    />
                </FormGroup>

                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="username" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="userName"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>

                <FormGroup controlId="phone" bsSize="large">
                    <FormLabel>Phone number</FormLabel>
                    <FormControl
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        type="phone"
                    />
                </FormGroup>

                <FormGroup controlId="address" bsSize="large">
                    <FormLabel>Address</FormLabel>
                    <FormControl
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        type="address"
                    />
                </FormGroup>

                <FormGroup controlId="profilepicture" bsSize="large">
                    <FormLabel>Profile Picture URL</FormLabel>
                    <FormControl
                        value={profilePicture}
                        onChange={e => setProfilePicture(e.target.value)}
                        type="profilepicture"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} onClick={async () => {
                    const userInfo = {
                        username: username,
                        password: password,
                        phone: phone,
                        firstName: firstName,
                        lastName: lastName,
                        profilePictureUrl: profilePicture,
                        address: address
                    }
                    const signedUp = await postSignup(userInfo);
                    if (signedUp == "success"){
                        alert(`you  have successfully signed up.`);
                        history.push("/login");
                    } else if (signedUp == "username_taken" ){
                        alert('Username already taken. Please try another one.');
                    }
                    else {
                        alert(`Signup failed.`);
                    }
                }}>
                    Sign up
                </Button>
                <Link to="/login">
                    <p>Already have an account?</p>
                </Link>

            </form>
        </div>
    );
}