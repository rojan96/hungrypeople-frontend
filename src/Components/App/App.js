import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {WhatWeDo} from "../WhatWeDo/WhatWeDo";
import {RecommendedBusinesses} from "../RecommendedBusinesses/RecommendedBusinesses";
import Search from '../SearchBar/SearchBar';
import Container from "@material-ui/core/Container";
import {NavBar} from "../NavBar/NavBar";
import {JumboHeader} from "../JumboHeader/JumboHeader";
import './Style.css';
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
const isLoggedIn = true;

const styles = {
    color: 'White',
    fontFamily: 'Cabin Sketch',
    backgroundImage : 'url(' + require('../../lighterMain.jpg') +')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    maxWidth: 'none'
};

const App = () => {
    if (isLoggedIn){
        return (
            <Router>
                <div>
                    <Switch>

                        <Route path="/" exact >
                            <Container style = {styles} fluid>
                                <NavBar variant={"light"} isLoggedIn={isLoggedIn} logoSize={300}/>
                                <JumboHeader />
                            </Container>
                            <WhatWeDo />
                            <RecommendedBusinesses />
                        </Route>

                        <Route path="/Search">
                                <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={100}/>
                                <Search/>
                        </Route>

                        <Route path="/Profile">
                            <NavBar variant={"dark"} bg={"dark"} isLoggedIn={isLoggedIn} logoSize={100}/>
                        </Route>

                        <Route path="/Login">
                            <Login/>
                        </Route>

                        <Route path="/SignUp">
                            <SignUp/>
                        </Route>


                    </Switch>
                </div>
            </Router>
        );
    } else {
        return (
            <Router>
                <div>
                    <Container style = {styles} fluid>
                        <NavBar variant={"light"} isLoggedIn={isLoggedIn}/>
                        <JumboHeader />
                    </Container>
                    <WhatWeDo/>
                    <RecommendedBusinesses/>
                </div>
            </Router>
        );
    }
}

export default App;