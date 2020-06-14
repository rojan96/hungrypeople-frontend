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
import {HowItWorks} from "../HowItWorks/HowItWorks";

const styles = {
    color: 'lightgray',
    fontFamily: 'Just Another Hand',
    backgroundColor:  '#40739e',
    maxWidth: 'none'
};

const LogoSize = 100;
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
                            <NavBar variant={"dark"} isLoggedIn={isLoggedIn} logoSize={LogoSize}/>
                            <JumboHeader/>
                        </Container>
                        <WhatWeDo/>
                        <HowItWorks/>
                        <RecommendedBusinesses/>
                        <Footer/>

                    </Route>
                    <Route path="/login">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={LogoSize}/>
                        <Login/>
                        <Footer/>

                    </Route>
                    <Route path="/signup">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={LogoSize}/>
                        <SignUp/>
                        <Footer/>

                    </Route>
                    <Route path="/search">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={LogoSize}/>
                        <Search/>
                        <Footer/>

                    </Route>
                    <Route path="/businessprofile">
                        <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={LogoSize}/>
                        <Footer/>

                    </Route>
                    <PrivateRoute path="/profile" component={ProfilePage}/>
                    <PrivateRoute path="/orders" component={OrderPage}/>

                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;