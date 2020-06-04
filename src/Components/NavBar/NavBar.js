import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

const styles = {
    fontSize: 30,
    opacity:'1'
}


export class NavBar extends React.Component {

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" variant={this.props.variant}>
                <Navbar.Brand href="#home" >
                    <img
                        src={require("./HungryPeopleLogo.png")}
                        className="d-inline-block align-top"
                        height={"200"}
                        width={"200"}
                        alt="Img not found"
                        />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#memes" className="align-top" style={styles}>What we do</Nav.Link>
                        <Nav.Link href="#deets" className="align-top" style={styles}>Contact us </Nav.Link>
                        <Nav.Link href="#deets" className="align-top" style={styles}>Log in</Nav.Link>
                        <Nav.Link href="#deets" className="align-top" style={styles}>Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
