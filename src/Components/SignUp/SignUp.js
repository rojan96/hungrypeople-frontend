import React, {useState} from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import "./SignUp.css";
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [setLoggedIn] = useState(false);
    const [setIsError] = useState(false);

    const url = "https://cors-anywhere.herokuapp.com/http://hpeopleserver.herokuapp.com/business";

    function validateForm() {
        return email.length > 0 && password.length > 0 && username.length > 0;
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     postSignup();
    // }

    function postSignup() {
        axios.post(url, {
            fullName: username,
            email: email,
            password: password
        }).then(result => {
            console.log(result);
            if (result.status === 200) {
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
        return <Redirect to={"/"}/>;
    }

    return (
        <div className="SignUp">
            <form>

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

                <Button block bsSize="large" disabled={!validateForm()} onClick={postSignup} type="submit">
                    Sign up
                </Button>
                <Link to="/login"><p>Already have an account?</p></Link>

            </form>
        </div>
    );
}