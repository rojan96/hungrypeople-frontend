import React from "react";
import { NavBar } from "../Components/NavBar/NavBar";
import UserProfile from "../Components/Profile/UserProfile/UserProfile";
import Footer from "../Components/Footer/Footer";
import Orders from "../Components/Orders/Orders";

const style = {
  textAlign: "center",
  background: "gray",
  margin: 0,
  padding: 20,
  fontFamily: "Just Another Hand",
  display: "flex",
};
const isLoggedIn = true;
const logoSize = 100;

export default function ProfilePage() {
  return (
    <div>
      <NavBar
        variant={"dark"}
        bg={"dark"}
        isLoggedIn={isLoggedIn}
        logoSize={logoSize}
      />
      <div style={style}>
        <div>
          <UserProfile />
        </div>
        <Orders />
      </div>
      <Footer />
    </div>
  );
}
