import React from 'react';
import {NavBar} from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Orders from "../Components/Orders/Orders";
import {CreateBusiness} from "../Components/Business/CreateBusiness/CreateBusiness";


const isLoggedIn = true;
const logoSize = 100;

export default function CreateBusinessPage() {
    return (
        <div>
            <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={logoSize}/>
            <CreateBusiness/>
            <Footer/>
        </div>
    );
}