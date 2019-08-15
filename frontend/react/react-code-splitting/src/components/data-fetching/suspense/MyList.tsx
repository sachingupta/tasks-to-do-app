import React, { useState, useEffect, Suspense } from 'react';
import { Loading } from '../../Loading';
import { List } from '../../list/List';
import * as ApiService from './api';

export const CollectionListInternal = () => {
	const items = ApiService.readCache();
	return <List id="pokemon-list" title="Pokemon list" items={items} />;
}

export const CollectionList = () => {
	return (<Suspense fallback={<Loading />}>
			<CollectionListInternal />>
	</Suspense>);
}