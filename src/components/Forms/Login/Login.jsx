import React, { useContext, useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "../Style.css";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/auth";
import { postLogin } from "../../../util/HPserver";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../util/Toast";

export default function Login() {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(AuthContext);
    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    return (
        <div className="LoginPage">
            <div className="InnerLogin">
                <h2>Sign in to your account</h2>
                <form className="Login">
                    <FormGroup controlId="email">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="TextInput"
                        />
                    </FormGroup>

                    <FormGroup controlId="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="TextInput"
                        />
                    </FormGroup>

                    <Button
                        variant="light"
                        block
                        disabled={!validateForm()}
                        onClick={async () => {
                            const user = await postLogin(userName, password);
                            if (user) {
                                notify(`👋 Welcome, ${userName}`, true);
                                setUser(user);
                                history.push("/");
                            } else {
                                notify("👎 Wrong credentials, Try again.");
                            }
                        }}
                    >
                        Login
                    </Button>
                    <Link to="/signup">
                        <p style={{ padding: 15 }}>Don't have an account?</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}
