import React, { Suspense } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';


export const Location: React.FC = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <div>Location</div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Location;
