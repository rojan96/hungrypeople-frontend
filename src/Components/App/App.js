import React from 'react';
import {BusinessBanner} from '../BusinessBanner/BusinessBanner';
import {WhatWeDo} from "../WhatWeDo/WhatWeDo";
import {RecommendedBusinesses} from "../RecommendedBusinesses/RecommendedBusinesses";

const App = () => {
  return(
      <div>
        <BusinessBanner />
        <WhatWeDo/>
        <RecommendedBusinesses/>
      </div>
  );
}

export default App;