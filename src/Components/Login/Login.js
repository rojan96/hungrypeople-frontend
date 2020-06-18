import React, {useContext, useState} from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import "./Login.css";
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/auth";
import {postLogin} from "../../util/HPserver";

export default function Login() {

    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(AuthContext);
    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    return (
        <div className="Login">
            <form>
                <FormGroup controlId="email" >
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="userName"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="password" >
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                </FormGroup>
                <Button block disabled={!validateForm()} onClick={async () => {
                    const user = await postLogin(userName, password);
                    if (user) {
                        setUser(user);
                        history.push("/");
                    } else {
                        alert("Wrong credentials");
                    }
                }}>
                    Login
                </Button>
                <Link to="/signup"><p>Don't have an account?</p></Link>
            </form>
        </div>
    );
}