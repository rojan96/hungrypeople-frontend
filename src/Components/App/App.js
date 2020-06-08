import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Link,  Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";

import {AuthContext, useAuth} from "../../context/auth";
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
import Orders from "../Orders/Orders";
import ProfilePage from "../../pages/ProfilePage";
import OrderPage from "../../pages/OrderPage";

const isLoggedIn = false;

const styles = {
    color: 'White',
    fontFamily: 'Cabin Sketch',
    backgroundImage : 'url(' + require('../../lighterMain.jpg') +')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    maxWidth: 'none'
};
const smallLogoSize = 100;
const largeLogoSize = 300;
const App = (props) => {
        const existingTokens = JSON.parse(localStorage.getItem("tokens"));
        const [authTokens, setAuthTokens] = useState(existingTokens);

        const setTokens = (data) => {
            localStorage.setItem("tokens", JSON.stringify(data));
            setAuthTokens(data);
        }
        return (
            <AuthContext.Provider value = {{authTokens, setAuthTokens: setTokens}}>
            <Router>
                <div>
                    <Switch>

                        <Route path="/" exact>
                            <Container style = {styles} fluid>
                                <NavBar variant={"light"} isLoggedIn={isLoggedIn} logoSize={largeLogoSize}/>
                                <JumboHeader />
                            </Container>
                            <WhatWeDo />
                            <RecommendedBusinesses />
                            <Footer/>
                        </Route>

                        <Route path="/login">
                            <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                            <Login/>
                            <Footer/>
                        </Route>

                        <Route path="/signup">
                            <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                            <SignUp/>
                            <Footer/>
                        </Route>

                        <Route path="/search">
                                <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                                <Search/>
                                <Footer/>
                        </Route>

                        <Route path="/businessprofile">
                            <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={smallLogoSize}/>
                            <Footer/>
                        </Route>

                        <PrivateRoute path="/profile" component={ProfilePage}/>
                        <PrivateRoute path="/orders" component={OrderPage}/>

                    </Switch>
                </div>
            </Router>
            </AuthContext.Provider>
        );
    }
export default App;