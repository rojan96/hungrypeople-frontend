import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import './Style.css';

const styles = {
    fontSize: 30,
    fontFamily: 'Cabin Sketch'
}

export class NavBar extends React.Component {

    render(){

            if (this.props.isLoggedIn){
                return(
                    <Navbar collapseOnSelect expand="lg" variant={this.props.variant} bg={this.props.bg}>

                        <Link to="/">
                            <Navbar.Brand>
                                <img
                                    src={require("./HungryPeopleLogo.png")}
                                    className="d-inline-block align-top"
                                    height={this.props.logoSize}
                                    width={this.props.logoSize}
                                    alt="Img not found"
                                />
                            </Navbar.Brand>
                        </Link>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                <Link to="/Search">
                                    <Nav.Link href="#1" className="align-top" style={styles}>Find Businesses </Nav.Link>
                                </Link>
                                <Link to="/Orders">
                                    <Nav.Link href="#2" className="align-top" style={styles}>Past Orders</Nav.Link>
                                </Link>
                                <Link to="/Profile">
                                    <Nav.Link href="#3" className="align-top" style={styles}>Profile</Nav.Link>
                                </Link>
                            </Nav>

                            {/*/!*<Link>*!/*/}
                            {/*<li>What we do</li>*/}
                            {/*/!*</Link>*!/*/}
                            {/*<Link to="/Search">*/}
                            {/*    <li>Find Businesses </li>*/}
                            {/*</Link>*/}
                            {/*<Link to="/Login">*/}
                            {/*    <li >Past Orders</li>*/}
                            {/*</Link>*/}
                            {/*<Link to="/SignUp">*/}
                            {/*    <li>Profile</li>*/}
                            {/*</Link>*/}
                        </Navbar.Collapse>
                    </Navbar>
                );
            } else {
                return (
                    <Navbar collapseOnSelect expand="lg" variant={this.props.variant} bg={this.props.bg}>
                        <Navbar.Brand href="#home" >
                            <img
                                src={require("./HungryPeopleLogo.png")}
                                className="d-inline-block align-top"
                                height={"200"}
                                width={"200"}
                                alt="Img not found"
                                style={{backgroundColor: 'Black'}}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                {/*<Link>*/}
                                <Nav.Link href="#memes" className="align-top" style={styles}>What we do</Nav.Link>
                                {/*</Link>*/}
                                <Link to="/Search">
                                    <Nav.Link href="#1" className="align-top" style={styles}>Find Businesses </Nav.Link>
                                </Link>
                                <Link to="/Login">
                                    <Nav.Link href="#2" className="align-top" style={styles}>Log in</Nav.Link>
                                </Link>
                                <Link to="/SignUp">
                                    <Nav.Link href="#3" className="align-top" style={styles}>Sign up</Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                );
            }

    }
}
