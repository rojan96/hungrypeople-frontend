import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "./Style.css";
import Footer from "../Footer/Footer";
import PrivateRoute from "../../Routes/PrivateRoute";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import OrderPage from "../../pages/OrderPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import HomePage from "../../pages/HomePage";
import { AuthContext } from "../../context/auth";
import Menu from "../Menu/Menu";
import CreateBusinessPage from "../../pages/CreateBusinessPage/CreateBusinessPage";
import ShowAllBusinessPage from "../../pages/ShowAllBusinessPage/ShowAllBusinessPage";
import BusinessProfilePage from "../../pages/ProfilePage/BusinessProfilePage";

const LogoSize = 150;
function App() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    const isLoggedIn = user ? true : false;
    // const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    // const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') || '');
    //
    // const setTokens = (data) => {
    //     localStorage.setItem("tokens", JSON.stringify(data));
    //     setAuthTokens(data);
    // }
    return (
        <AuthContext.Provider value={value}>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/search" component={ShowAllBusinessPage} />

                    <Route
                        path="/businessProfile"
                        component={BusinessProfilePage}
                    />

                    <Route path="/business/menu/:businessName">
                        <NavBar
                            variant={"dark"}
                            isLoggedIn={isLoggedIn}
                            logoSize={LogoSize}
                        />
                        <Menu />
                        <Footer />
                    </Route>

                    <PrivateRoute path="/profile" component={ProfilePage} />
                    <PrivateRoute path="/orders" component={OrderPage} />
                    <PrivateRoute
                        path="/createBusiness"
                        component={CreateBusinessPage}
                    />
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
