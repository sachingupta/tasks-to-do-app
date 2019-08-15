import React from 'react';
import { CollectionList } from '../components/data-fetching/suspense/MyList';

export const Collection = ()=> {
    return (
      <div>
           Collection Page
           <CollectionList />
      </div>
    );
  }