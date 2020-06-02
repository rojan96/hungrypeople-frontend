import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const styles = {
    fontSize: 30,
    opacity:'1',
    color: 'Black'
}

export class NavBar extends React.Component {

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" variant={"dark"}>
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
                        <Link to="/Signup">
                            <Nav.Link href="#3" className="align-top" style={styles}>Sign up</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
