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
import Ionicons from '@expo/vector-icons/Ionicons';

import { StoreCard } from '@/components/StoreCard';

import { useAppwrite } from '@/lib/useAppwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { getStores } from '@/lib/appwrite';

export default function Index() {
	const { user } = useGlobalContext();

	const params = useLocalSearchParams<{ query?: string; filter?: string }>();

	const {
		data: stores,
		refetch,
		loading,
	} = useAppwrite({
		fn: getStores,
		params: {
			filter: params.filter!,
			query: params.query!,
			limit: 6,
		},
		skip: true,
	});

	useEffect(() => {
		refetch({
			filter: params.filter!,
			query: params.query!,
			limit: 6,
		});
	}, [params.filter, params.query]);

	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => router.push(`/find`);
	const handleCardPress = () => router.push(`/find`);

	return (
		<View className="flex-1 p-8 pt-12">
			<View className="flex flex-row justify-between">
				<Text className="font-sourGummy-bold text-3xl mb-3">Boba Log</Text>
				<TouchableOpacity
					className="opacity-55"
					onPress={() => router.push('/profile')}
				>
					<Ionicons name="person-circle-outline" size={32} />
				</TouchableOpacity>
			</View>
			<Searchbar
				placeholder="Search"
				onChangeText={(query) => setSearchQuery(query)}
				value={searchQuery}
				onSubmitEditing={handleSearch}
			/>

			<View className="mt-8">
				<View className="flex border-b border-gray-400 border-spacing-4">
					<View className="flex flex-row justify-between">
						<Text className="text-lg">Favorites</Text>
						<Text className="text-md text-blue-500 underline underline-offset-2">
							See All
						</Text>
					</View>
					<View className="text-gray-500 my-8 mx-auto">
						<Text>No favorites yet.</Text>
					</View>
				</View>
				<View className="flex">
					<View className="flex flex-row justify-between mt-4">
						<Text className="text-lg">Past Stores</Text>
						<Text className="text-md text-blue-500 underline underline-offset-2">
							See All
						</Text>
					</View>

					{/* <StoreCard />
					<StoreCard /> */}
					{loading ? (
						<ActivityIndicator size="large" className="text-primary-300" />
					) : !stores || stores.length === 0 ? (
						<Text>No Results</Text>
					) : (
						<FlatList
							data={stores}
							renderItem={(item) => <StoreCard item={item.item} />}
							keyExtractor={(item) => item.$id}
							contentContainerClassName="flex gap-5 mt-5 w-full"
						/>
					)}
				</View>
			</View>
		</View>
	);
}
