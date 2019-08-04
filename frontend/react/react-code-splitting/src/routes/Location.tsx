import React, { Suspense } from 'react';
import './App.css';
import { ErrorBoundary } from '../components/ErrorBoundary';

/* static import */
// import * as math from './math';
// import Welcome from './Welcome';

/** Dynamic import */
const math = import(/* webpackChunkName: "math" */"../math").then(math => {
  console.log(math.add(16, 26));
});
const Welcome = React.lazy(() => import(/* webpackChunkName: "welcome" */'../Welcome'));


/* static import */
//console.log(math.add(16, 26)); // 42


export const Location: React.FC = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <div>Location</div>
          <Welcome />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Location;
