import React, {useContext, useMemo, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import {WhatWeDo} from "../WhatWeDo/WhatWeDo";
import {RecommendedBusinesses} from "../RecommendedBusinesses/RecommendedBusinesses";
import Search from '../SearchBar/SearchBar';
import {NavBar} from "../NavBar/NavBar";
import {JumboHeader} from "../JumboHeader/JumboHeader";
import './Style.css';
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Footer from "../Footer/Footer";
import PrivateRoute from "../../Routes/PrivateRoute";
import ProfilePage from "../../pages/ProfilePage";
import OrderPage from "../../pages/OrderPage";
import {AuthContext} from "../../context/auth";
import DesktopBg from "../../images/bg-curvy-desktop.svg";

const styles = {
    color: 'lightgray',
    fontFamily: 'Just Another Hand',
    backgroundColor:  '#40739e',
    maxWidth: 'none'
};

const smallLogoSize = 100;
const largeLogoSize = 100;
function App () {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);
    const isLoggedIn = user ? true: false;
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
                    <Route path="/" exact>
                        <Container style={styles} className="intro-section" fluid>
                            <NavBar variant={"dark"} isLoggedIn={isLoggedIn} logoSize={largeLogoSize}/>
                            <JumboHeader/>
                        </Container>
                        <WhatWeDo/>
                        <RecommendedBusinesses/>
                    </Route>
                    <Route path="/login">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                        <SignUp/>
                    </Route>
                    <Route path="/search">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                        <Search/>
                    </Route>
                    <Route path="/businessprofile">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                    </Route>
                    <PrivateRoute path="/profile" component={ProfilePage}/>
                    <PrivateRoute path="/orders" component={OrderPage}/>

                </Switch>
                <Footer/>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;