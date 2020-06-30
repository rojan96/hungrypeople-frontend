import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserInfo, getBusinessInfo } from "../../../util/HPserver";
import "./UserProfile.css";

export default function UserProfile() {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});
    const [businessInfo, setBusinessInfo] = useState({});

    useEffect(() => {
        async function fetchData() {
            const userInfo = await getUserInfo(user);
            const businessInfo = await getBusinessInfo(user);
            setBusinessInfo(businessInfo);
            setUserInfo(userInfo);
        }
        fetchData();
    }, []);

    return (
        <div className="profileContainer">
            <div className="profileDiv">
                <div className="profilePicture">
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
                {businessInfo ? (
                    <Link to={`/businessProfile/${businessInfo.id}`}>
                        <Button variant="dark" block>
                            <h2>Business Profile</h2>
                        </Button>
                    </Link>
                ) : (
                    <Link to="/createBusiness">
                        <Button variant="dark" block>
                            <h2>Create a Business</h2>
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}
