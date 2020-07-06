import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import "./Style.css";
import { AuthContext } from "../../context/auth";
import "../App/Style.css";
import { HashLink } from "react-router-hash-link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import { FiLogOut } from "react-icons/fi";
import CartDrawer from "../Cart/CartDrawer/CartDrawer";

export function NavBar(props) {
    const styles = {
        fontSize: 20,
        fontFamily: "Rock Salt",
    };
    const logoSize = 100;
    const { user, setUser } = useContext(AuthContext);
    const history = useHistory();
    const isLoggedIn = true; //user ? true : false; //
    const iconSize = 40;

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant={props.variant}
            bg={props.bg}
            style={{
                padding: "0px 20px",
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
                {isLoggedIn ? (
                    <Nav>
                        <Link to="/search">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                <SearchIcon
                                    style={{ fontSize: `${iconSize}` }}
                                />
                            </span>
                        </Link>

                        <Link to="/profile">
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                <AccountCircleIcon
                                    style={{ fontSize: `${iconSize}` }}
                                />
                            </span>
                        </Link>

                        <Link>
                            <span
                                className="nav-link hvr-buzz-out"
                                style={styles}
                            >
                                <div>
                                    <CartDrawer />
                                </div>
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
                            <FiLogOut style={{ fontSize: `${iconSize}` }} />
                        </Nav.Link>
                    </Nav>
                ) : (
                    <Nav>
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
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}
