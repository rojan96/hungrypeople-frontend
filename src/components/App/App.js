import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Style.css";
import PrivateRoute from "../../Routes/PrivateRoute";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import OrderPage from "../../pages/OrderPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import HomePage from "../../pages/HomePage";
import { AuthContext } from "../../context/auth";
import CreateBusinessPage from "../../pages/CreateBusinessPage/CreateBusinessPage";
import ShowAllBusinessPage from "../../pages/ShowAllBusinessPage/ShowAllBusinessPage";
import BusinessProfilePage from "../../pages/ProfilePage/BusinessProfilePage";
import AddMenuItemPage from "../../pages/AddMenuItemPage";
import MenuPage from "../../pages/MenuPage/MenuPage";

//const LogoSize = 150;

function App() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    //    const isLoggedIn = user ? true : false;

    return (
        <AuthContext.Provider value={value}>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/search" component={ShowAllBusinessPage} />

                    <Route
                        path="/business/menu/:businessId"
                        component={MenuPage}
                    />
                    <PrivateRoute
                        path="/businessProfile/:businessId"
                        component={BusinessProfilePage}
                    />
                    <PrivateRoute path="/profile" component={ProfilePage} />
                    <PrivateRoute path="/orders" component={OrderPage} />
                    <PrivateRoute
                        path="/createBusiness"
                        component={CreateBusinessPage}
                    />
                    <PrivateRoute
                        path="/addMenuItem"
                        component={AddMenuItemPage}
                    />
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
