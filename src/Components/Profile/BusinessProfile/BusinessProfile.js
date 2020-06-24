import React, {useContext} from 'react';
import './Style.css';
import {AuthContext} from "../../../context/auth";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function BusinessProfile (){
    const {user} = useContext(AuthContext);
        return (
            <container className="profileContainer">
                <div className="profileDiv">
                    <img src={user.profilePicture} alt = "User Profile" style={{height: 200}}/>
                    <h3>Welcome, {user.username}</h3>
                </div>
                <div className="accountInfoDiv">
                    <h4>Your account information</h4>
                    <hr/>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email} </p>
                    <p>Address: {user.address}</p>
                    <p>Phone Number: {user.phone}</p>
                </div>
                <Link to="/createBusiness">
                        <Button block bsSize="large">Create a Business</Button>
                </Link>
                <Button block bsSize="large">Business Profile</Button>
            </container>
        );
}