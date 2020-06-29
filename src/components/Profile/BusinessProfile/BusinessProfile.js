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
            console.log(businessInfo);
            businessInfo
                ? setBusinessInfo(businessInfo)
                : alert("Something went wrong bruh");
        }
        fetchData();
    }, []);

    return (
        <div className="profileContainer">
            <div className="profileDiv">
                <div clasName="profilePicture">
                    <img
                        src={businessInfo.profilePicture}
                        alt="User Profile"
                        style={{ height: 200 }}
                    />
                </div>
                <h3>Welcome, {businessInfo.fullName}</h3>
            </div>
            <div className="accountInfoDiv">
                <h4>Your account information</h4>
                <hr />
                <p>ID: {businessInfo.id}</p>
                <p>Name: {businessInfo.fullName}</p>
                <p>Email: {businessInfo.email} </p>
                <p>Address: {businessInfo.address}</p>
                <p>Phone Number: {businessInfo.phone}</p>
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
