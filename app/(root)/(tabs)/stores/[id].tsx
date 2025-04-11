import React, { useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { router, useLocalSearchParams } from 'expo-router';

import { useAppwrite } from '@/lib/useAppwrite';
import { getStoreById } from '@/lib/appwrite';

import images from '@/constants/images';
import DrinkCard from '@/components/DrinkCard';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Store() {
	const [isSearching, setIsSearching] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const { id } = useLocalSearchParams<{ id?: string }>();

	const { data: store, loading } = useAppwrite({
		fn: getStoreById,
		params: {
			id: id!,
		},
	});

	return (
		<View className="flex-1 p-8 pt-12">
			<View className="flex flex-row justify-between items-center">
				<TouchableOpacity className="opacity-55" onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={32} color="#ccae88" />
				</TouchableOpacity>
				{isSearching && (
					<View className="bg-[#dcc5a8] py-2 px-4 rounded-3xl flex-1 mx-2 flex-row items-center justify-between">
						<Ionicons name="search" size={16} color="white" />
						<TextInput
							placeholder="jasmine milk tea"
							onChangeText={setSearchQuery}
							value={searchQuery}
							className="ps-2 placeholder-gray-500 flex-1"
						/>
						<TouchableOpacity onPress={() => setIsSearching(false)}>
							<Ionicons
								name="close"
								size={18}
								color="#8a624a"
								className="justify-end flex"
							/>
						</TouchableOpacity>
					</View>
				)}
				<View className="flex flex-row align-middle items-center">
					{/* <Searchbar
						placeholder="Search"
						onChangeText={(query) => setSearchQuery(query)}
						value={searchQuery}
					/> */}

					{!isSearching && (
						<TouchableOpacity
							className="opacity-55"
							onPress={() => setIsSearching(true)}
						>
							<Ionicons
								name="search-circle-outline"
								size={32}
								color="#b18f6a"
							/>
						</TouchableOpacity>
					)}
					<TouchableOpacity
						className="opacity-55"
						onPress={() => router.back()}
					>
						<Ionicons name="heart-circle-outline" size={32} color="#a67b5b" />
					</TouchableOpacity>
				</View>
			</View>
			<View className="flex-grow">
				{store && (
					<View className="border-b border-gray-400 border-spacing-4">
						<Text className="text-center text-3xl font-sourGummy-semibold">
							{store.name}
						</Text>

						<Image
							source={{
								uri: store.cover_photo,
							}}
							resizeMode="cover"
							style={{
								maxWidth: '100%',
								width: '100%',
								height: 200,
							}}
							className="my-4 mx-auto"
						/>
					</View>
				)}

				<View className="flex-grow">
					<View className="flex flex-row justify-between mt-4">
						<Text className="text-lg">Drinks</Text>
					</View>

					{loading ? (
						<ActivityIndicator size="large" className="text-primary-300" />
					) : (
						<ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
							{store?.drinks?.map((item) => (
								<DrinkCard key={item.$id} drink={item} />
							))}
						</ScrollView>
					)}
				</View>
			</View>
		</View>
	);
}
