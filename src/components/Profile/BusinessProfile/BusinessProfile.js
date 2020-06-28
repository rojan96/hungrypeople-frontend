import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import { AuthContext } from "../../../context/auth";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getBusinessInfo } from "../../../util/HPserver";

export default function BusinessProfile() {
    const { user } = useContext(AuthContext);
    const [businessInfo, setBusinessInfo] = useState({});

    useEffect(() => {
        async function fetchData() {
            const businessInfo = await getBusinessInfo(user);
            businessInfo
                ? setBusinessInfo(businessInfo)
                : alert("Something went wrong bruh");
        }
        fetchData();
    }, []);

    // id: user.id,
    // fullName: user.bFullName,
    // email: user.bEmail,
    // address: user.bAddress,
    // phone: user.bPhone,
    // profilePicture: user.bCoverPictureUrl,
    return (
        <div className="profileContainer">
            <div className="profileDiv">
                <div clasName="profilePicture">
                    <img
                        src={businessInfo.bCoverPictureUrl}
                        alt="User Profile"
                        style={{ height: 200 }}
                    />
                </div>
                <h3>Welcome, {businessInfo.username}</h3>
            </div>
            <div className="accountInfoDiv">
                <h4>Your account information</h4>
                <hr />
                <p>Name: {businessInfo.bFullName}</p>
                <p>Email: {businessInfo.bEmail} </p>
                <p>Address: {businessInfo.bAddress}</p>
                <p>Phone Number: {businessInfo.bPhone}</p>
            </div>
            <div>
                <Link to="/addMenuItem">
                    <Button variant="dark" block>
                        <h2>Edit Menu</h2>
                    </Button>
                </Link>
            </div>
        </div>
    );
}
