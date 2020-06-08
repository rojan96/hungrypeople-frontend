import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {useAuth} from "../../context/auth";

let userProfile = {};

export default function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    const referer = '/';
    const url ="https://cors-anywhere.herokuapp.com/http://hpeopleserver.herokuapp.com/business";

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function postLogin() {
        axios.post(url, {

        },{
            auth:{
                username: userName,
                password: password
            }
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to={"/Profile"}/>;
    }

    return (
        <div className="Login">
            <form>

                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="userName"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
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
                <Button block bsSize="large" disabled={!validateForm()} onClick={postLogin} type="submit">
                    Login
                </Button>
                <Link to="/signup"><p>Don't have an account?</p></Link>
            </form>
        </div>
    );
}