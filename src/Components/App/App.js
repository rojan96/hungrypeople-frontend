import React from 'react';
import {BusinessBanner} from '../BusinessBanner/BusinessBanner';
import {WhatWeDo} from "../WhatWeDo/WhatWeDo";
import {RecommendedBusinesses} from "../RecommendedBusinesses/RecommendedBusinesses";

import About from '../About/About';
import Search from '../Search/Search';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return(
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={BusinessBanner}/>
            <Route path="/About" component={About} />
            <Route path="/Search" component={Search} />
          </Switch>
        <WhatWeDo/>
        <RecommendedBusinesses/>
        </div>
      </Router>


export default App;