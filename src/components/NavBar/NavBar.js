import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import "./Style.css";
import { AuthContext } from "../../context/auth";
import "../App/Style.css";
import { HashLink } from "react-router-hash-link";
export function NavBar(props) {
    const styles = {
        fontSize: 20,
        fontFamily: "Rock Salt",
    };
    const logoSize = 100;
    const { user, setUser } = useContext(AuthContext);
    const history = useHistory();
    const isLoggedIn = user ? true : false;

    if (isLoggedIn) {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                variant={props.variant}
                bg={props.bg}
                style={{
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
            >
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            src={require("./HungryPeopleLogo.png")}
                            className="d-inline-block align-top hvr-buzz-out"
                            height={logoSize}
                            width={logoSize}
                            alt="Img not found"
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <HashLink to="/#WhatWeDo">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                What we do
                            </span>
                        </HashLink>
                        <Link to="/search">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                Find Businesses{" "}
                            </span>
                        </Link>
                        <Link to="/orders">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                Past Orders
                            </span>
                        </Link>
                        <Link to="/profile">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                Profile
                            </span>
                        </Link>

                        <Nav.Link
                            className="align-top"
                            onClick={() => {
                                setUser(null);
                                history.push("/");
                            }}
                            style={styles}
                        >
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    } else {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                variant={props.variant}
                bg={props.bg}
            >
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            src={require("./HungryPeopleLogo.png")}
                            className="d-inline-block align-top hvr-buzz-out"
                            height={logoSize}
                            width={logoSize}
                            alt="Img not found"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <HashLink to="/#WhatWeDo">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                What we do
                            </span>
                        </HashLink>
                        <Link to="/search">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                Find Businesses
                            </span>
                        </Link>
                        <Link to="/login">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                Log in
                            </span>
                        </Link>
                        <Link to="/signup">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                Sign up
                            </span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
