import React from 'react';
/* static import */
// import * as math from './math';
// import Welcome from './Welcome';

/** Dynamic import */
const math = import(/* webpackChunkName: "math" */"../math").then(math => {
  console.log(math.add(16, 26));
});

/* static import */
//console.log(math.add(16, 26)); // 42

export const Home: React.FC = () => {
    return (
      <div>
           Home Page
      </div>
    );
  }