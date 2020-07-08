import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import "./Style.css";
import { AuthContext } from "../../../context/auth";
import "../../App/Style.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CartDrawer from "../../Cart/CartDrawer/CartDrawer";
import { Button } from "react-bootstrap";
import { notify } from "../../../util/Toast";

export function NavBar(props) {
    const styles = {
        fontSize: 20,
        fontFamily: "Rock Salt",
        textDecoration: "none",
    };
    const logoSize = 100;
    const { user, setUser } = useContext(AuthContext);
    const history = useHistory();
    const isLoggedIn = user ? true : false; //true; //
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
                            <span className="hvr-buzz-out">
                                <Button className="nav-link" variant="none">
                                    <SearchIcon
                                        style={{ fontSize: `${iconSize}` }}
                                    />
                                </Button>
                            </span>
                        </Link>

                        <Link to="/profile">
                            <span className="hvr-buzz-out">
                                <Button className="nav-link" variant="none">
                                    <AccountCircleIcon
                                        style={{ fontSize: `${iconSize}` }}
                                    />
                                </Button>
                            </span>
                        </Link>

                        <Link>
                            <span className="hvr-buzz-out">
                                <div>
                                    <CartDrawer />
                                </div>
                            </span>
                        </Link>
                        <Nav.Link
                            className="hvr-buzz-out"
                            onClick={() => {
                                setUser(null);
                                notify(" 😒 Successfully Logged Out!", true);
                                history.push("/");
                            }}
                        >
                            <span className="hvr-buzz-out">
                                <Button className="nav-link" variant="none">
                                    <ExitToAppIcon
                                        style={{ fontSize: `${iconSize}` }}
                                    />
                                </Button>
                            </span>
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
