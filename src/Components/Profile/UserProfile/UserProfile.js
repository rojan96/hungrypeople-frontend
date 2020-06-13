import React, {useContext} from 'react';
import './UserProfile.css';

import {AuthContext} from "../../../context/auth";

export default function UserProfile (){
    const {user} = useContext(AuthContext);
        return (
            <container className="profileContainer">
                <div className="profileDiv">
                    <img src={user.profilePicture} style={{height: 200}}/>
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
            </container>
        );
}