import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {Link, useHistory} from 'react-router-dom';
import './Style.css';
import {AuthContext} from "../../context/auth";


export function NavBar (props) {
    const styles = {
        fontSize: 30,
        fontFamily: 'Cabin Sketch'
    }
    const {setUser} = useContext(AuthContext);
    const history = useHistory();

    if (props.isLoggedIn) {
            return (
                <Navbar collapseOnSelect expand="lg" variant={props.variant} bg={props.bg}>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={require("./HungryPeopleLogo.png")}
                                className="d-inline-block align-top"
                                height={props.logoSize}
                                width={props.logoSize}
                                alt="Img not found"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Link to="/search">
                                <Nav.Link href="#1" className="align-top" style={styles}>Find Businesses </Nav.Link>
                            </Link>
                            <Link to="/orders">
                                <Nav.Link href="#2" className="align-top" style={styles}>Past Orders</Nav.Link>
                            </Link>
                            <Link to="/profile">
                                <Nav.Link href="#3" className="align-top" style={styles}>UserProfile</Nav.Link>
                            </Link>
                             <Nav.Link href="#3" className="align-top" onClick={() => {
                                 setUser(null);
                                 history.push("/");
                             }}
                                       style={styles}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
            return (
                <Navbar collapseOnSelect expand="lg" variant={props.variant} bg={props.bg}>

                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={require("./HungryPeopleLogo.png")}
                                className="d-inline-block align-top"
                                height={props.logoSize}
                                width={props.logoSize}
                                alt="Img not found"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Link to="/">
                                <Nav.Link href="#memes" className="align-top" style={styles}>What we do</Nav.Link>
                            </Link>
                            <Link to="/search">
                                <Nav.Link href="#1" className="align-top" style={styles}>Find Businesses</Nav.Link>
                            </Link>
                            <Link to="/login">
                                <Nav.Link href="#2" className="align-top" style={styles}>Log in</Nav.Link>
                            </Link>
                            <Link to="/signup">
                                <Nav.Link href="#3" className="align-top" style={styles}>Sign up</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
}
