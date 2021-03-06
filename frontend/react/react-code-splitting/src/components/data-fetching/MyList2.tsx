import React, { useState, useEffect, Suspense } from 'react';
import { Loading } from '../Loading';
import { List } from '../list/List';
import * as ApiService from './api/api2';

export const CollectionListInternal = () => {
	const items = ApiService.readCache();
	return <List title="Collection" items={items} />;
}

export const CollectionList = () => {
	return (
	<Suspense fallback={<Loading />}>
			<CollectionListInternal />>
	</Suspense>);
}