import React, {useContext, useState} from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/auth";
import {postLogin} from "../../util/HPserver";

export default function Login() {
    // const [isLoggedIn, setLoggedIn] = useState(false);
    // const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(AuthContext);
    const history = useHistory();
    // const referer = '/';
    // const url = "https://cors-anywhere.herokuapp.com/http://hpeopleserver.herokuapp.com/users";

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    // }
    //

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
                <Button block bsSize="large" disabled={!validateForm()} onClick={async () => {

                    const user = await postLogin();
                    console.log(postLogin());
                    setUser(user);
                    history.push("/");
                }}>
                    Login
                </Button>
                <Link to="/signup"><p>Don't have an account?</p></Link>
            </form>
        </div>
    );
}