import React, { useState, useEffect, Suspense } from 'react';
import { Loading } from '../../Loading';
import { List } from '../../list/List';
import { unstable_createResource  } from 'react-cache';
import { sleeper } from './api';

const itemResource: any = unstable_createResource(() => {
	return fetch('https://jsonplaceholder.typicode.com/todos')
	.then(resp => resp.json())
	.then(sleeper(2000))
});

export const CollectionListInternal = () => {
	const items = itemResource.read();
	return <List id="pokemon-list" title="Pokemon list" items={items} />;
}

export const CollectionList = () => {
	return (<Suspense fallback={<Loading />}>
			<CollectionListInternal />>
	</Suspense>);
}

/**
 Under the hood, react-cache will do what our old service was doing
return the data from cache,
if the cache doesn’t contain the data, it will throw the fetch Promise we set when we created the resource,
Suspense will catch it and handle loader rendering.
 */