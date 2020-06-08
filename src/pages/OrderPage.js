import React from 'react';
import {NavBar} from "../Components/NavBar/NavBar";
import UserProfile from "../Components/Profile/UserProfile/UserProfile";
import Footer from "../Components/Footer/Footer";
import PrivateRoute from "../Routes/PrivateRoute";
import Orders from "../Components/Orders/Orders";

const style={
    textAlign: 'center',
    background: 'gray',
    margin: 0,
    padding: 20,
    fontFamily: 'Cabin Sketch',
}
const isLoggedIn = true;
const logoSize = 100;

export default function OrderPage () {
    return(
        <div>
            <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={logoSize}/>
            <Orders/>
            <Footer/>
        </div>
    );
}