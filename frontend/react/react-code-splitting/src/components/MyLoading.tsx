import React from 'react';
import { Loading } from './Loading';
export const MyLoadingComponent = ({isLoading, error}: any) => {
    // Handle the loading state
    if (isLoading) {
      return <Loading />;
    }
    // Handle the error state
    else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
      return null;
    }
  };