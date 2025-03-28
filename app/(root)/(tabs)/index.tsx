import React, { useState } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { router } from 'expo-router';

import images from '@/constants/images';
import { StoreCard } from '@/components/StoreCard';

export default function Index() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => router.push(`/find`);
	const handleCardPress = () => router.push(`/find`);

	return (
		<View className="flex-1 p-8 pt-12">
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
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						className="flex border-b border-slate-300"
						onPress={() => handleCardPress()}
					>
						<View className="flex flex-row my-4 items-center ">
							<Image
								source={images.heyteaLogo}
								resizeMode="contain"
								className="w-[64px] h-[64px] rounded-full"
								style={{
									width: 64, // 64px
									height: 64, // 64px
									borderRadius: 32, // Half of the width/height for circular image
								}}
							/>
							<View className="flex flex-col">
								<Text className="ms-4 text-lg">HeyTea</Text>
								<Text className="ms-4 text-gray-600">Sunnyvale, CA</Text>
							</View>
						</View>
					</TouchableHighlight>
					<StoreCard />
				</View>
			</View>
		</View>
	);
}
