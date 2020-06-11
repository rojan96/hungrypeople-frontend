import React from 'react';
import './UserProfile.css';

const userProfile = {
    "id": "1",
    "username": "crobinson",
    "email": "crobinson@gmail.com",
    "address": "Staten Island, NY",
    "phone": "4272762",
    "firstName": "Colin",
    "lastName": "Robinson",
    "profilePicture": "https://assets.fxnetworks.com/cms/prod/2020/03/17/web_cast_markproksch_what-we-do-in-the-shadows_570x698.jpg?resize=570:*"
}

export default class UserProfile extends React.Component {
    render(){
        return(
            <container className="profileContainer">
                <div className="profileDiv">
                    <img src={userProfile.profilePicture} style={{height: 200}}/>
                    <h3>Welcome, {userProfile.username}</h3>
                </div>
                <div className="accountInfoDiv">
                    <h4>Your account information</h4>
                    <hr/>
                    <p>First Name: {userProfile.firstName}</p>
                    <p>Last Name: {userProfile.lastName}</p>
                    <p>Email: {userProfile.email} </p>
                    <p>Address: {userProfile.address}</p>
                    <p>Phone Number: {userProfile.phone}</p>
                </div>
            </container>

        );
    }
}