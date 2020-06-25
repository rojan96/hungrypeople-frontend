import React, { useContext, useEffect, useState } from "react";
import "./UserProfile.css";
import { AuthContext } from "../../../context/auth";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../../util/HPserver";

export default function UserProfile() {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        async function fetchData() {
            const userInfo = await getUserInfo(user);
            setUserInfo(userInfo);
        }
        fetchData();
    }, []);

    return (
        <div className="profileContainer">
            <div className="profileDiv">
                <div clasName="profilePicture">
                    <img
                        src={userInfo.profilePicture}
                        alt="User Profile"
                        style={{ height: 200 }}
                    />
                </div>
                <h3>Welcome, {userInfo.username}</h3>
            </div>
            <div className="accountInfoDiv">
                <h4>Your account information</h4>
                <hr />
                <p>First Name: {userInfo.firstName}</p>
                <p>Last Name: {userInfo.lastName}</p>
                <p>Email: {userInfo.email} </p>
                <p>Address: {userInfo.address}</p>
                <p>Phone Number: {userInfo.phone}</p>
            </div>
            <div>
                <Link to="/createBusiness">
                    <Button variant="dark" block>
                        <h2>Create a Business</h2>
                    </Button>
                </Link>
                <Link to="/businessProfile">
                    <Button variant="dark" block>
                        <h2>Business Profile</h2>
                    </Button>
                </Link>
            </div>
        </div>
    );
}
