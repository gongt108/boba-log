import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';

import images from '@/constants/images';

export default function Index() {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<View className="flex-1 p-8 pt-12">
			<Searchbar
				placeholder="Search"
				onChangeText={(query) => setSearchQuery(query)}
				value={searchQuery}
			/>

			<View className="mt-8">
				<View className="flex border-b border-slate-300 border-spacing-4">
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
					<TouchableOpacity className="flex h-48">
						<View className="flex flex-row my-4">
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
							<Text>HeyTea</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
