import React, { useState, useEffect } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { router, useLocalSearchParams } from 'expo-router';

import images from '@/constants/images';
import { StoreCard } from '@/components/StoreCard';

import { useAppwrite } from '@/lib/useAppwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { getStores } from '@/lib/appwrite';

export default function Find() {
	const { user } = useGlobalContext();
	// const { query } = useLocalSearchParams();

	// console.log(query);

	const params = useLocalSearchParams();

	const {
		data: stores,
		refetch,
		loading,
	} = useAppwrite({
		fn: getStores,
		params: {
			limit: 10,
		},
		skip: true,
	});
	console.log(stores);

	useEffect(() => {
		refetch({
			limit: 10,
		});
	}, [params.query]);

	const [searchQuery, setSearchQuery] = useState('');

	const filteredStores = params.query
		? stores?.filter((store) =>
				store.name.toLowerCase().includes(params?.query.toLowerCase())
		  )
		: stores;

	const handleSearch = () =>
		router.push({
			pathname: '/find',
			params: {
				query: searchQuery,
			},
		});
	const handleCardPress = () => router.push(`/find`);

	return (
		<View className="flex-1 p-8 pt-12">
			<Searchbar
				placeholder="Search"
				onChangeText={(term) => setSearchQuery(term)}
				value={searchQuery}
				onSubmitEditing={handleSearch}
			/>

			{loading ? (
				<ActivityIndicator size="large" className="text-primary-300" />
			) : !filteredStores || filteredStores.length === 0 ? (
				<Text>No Results</Text>
			) : (
				<FlatList
					data={filteredStores}
					renderItem={(item) => <StoreCard item={item.item} />}
					keyExtractor={(item) => item.$id}
					contentContainerClassName="flex gap-5 mt-5 w-full"
				/>
			)}
		</View>
	);
}
