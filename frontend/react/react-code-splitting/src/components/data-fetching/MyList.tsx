import React, { useState, useEffect } from 'react';
import { Loading } from '../Loading';
import { List } from '../list/List';
import * as ApiService from './api/api';

export const CollectionList = () => {
	// 1. we initiate a loading state
	const [isLoading, setLoading] = useState(true);
	const items = ApiService.readCache();

	useEffect(() => {
		if (items) {
			return;
		}

		// 2. we set the loading state before and after data fetching
		setLoading(true);
		ApiService.get().finally(() => {
			setLoading(false);
		});
	}, []);

	// 3. we consume the loading state to display the Loading component
	if (isLoading) {
		return <Loading />;
	}

	return <List title="Collection" items={items} />;
}