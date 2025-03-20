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
import DrinkCard from '@/components/DrinkCard';

export default function Review() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleCardPress = () => router.push(`/find`);

	return (
		<View className="flex-1 overflow-scroll">
			<View className="mx-auto mt-20 ">
				<Image
					source={images.heyteaMoyunCoconutBlue}
					className="rounded-full"
				/>
				<Text className="mt-4 text-2xl text-center font-semibold">
					Moyun Coconut Blue
				</Text>
				<Text className="text-center text-lg">HeyTea</Text>
			</View>

			<View className="mt-8 border-t border-slate-300">
				<View className="p-8">
					<Text className="text-lg font-semibold">What would you change?</Text>

					<Text className="text-lg">Size: Default</Text>
					<Text className="text-lg">Ice: Default</Text>
					<View className="flex-row justify-between">
						<TouchableOpacity
							activeOpacity={0.6}
							className="w-1/4 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md items-center text-center">Perfect</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.6}
							className="w-fit border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">More Ice</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.6}
							className="w-1/4 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">Less Ice</Text>
						</TouchableOpacity>
					</View>
					<Text className="text-lg">Sugar: Default</Text>
					<View className="flex-row justify-between items-center">
						<TouchableOpacity
							activeOpacity={0.6}
							className="h-fit w-1/4 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">Perfect</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.6}
							className="w-1/4 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">More Sugar</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.6}
							className="w-1/4 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">Less Sugar</Text>
						</TouchableOpacity>
					</View>
					<Text className="text-lg">Toppings: Grass Jelly</Text>
					<View className="flex-row justify-between items-center mx-4">
						<TouchableOpacity
							activeOpacity={0.6}
							className="h-fit w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">Good</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.6}
							className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">Bad</Text>
						</TouchableOpacity>
					</View>
					<Text className="text-lg">Would you get again?</Text>
					<View className="flex-row justify-between items-center mx-4">
						<TouchableOpacity
							activeOpacity={0.6}
							className="h-fit w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">Yes</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.6}
							className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
							onPress={() => handleCardPress()}
						>
							<Text className="text-md text-center">No</Text>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity
					// onPress={() => saveOrder()}
					className="mx-auto py-2 px-4 mb-12 mt-8 border rounded-2xl bg-gray-200"
				>
					<Text className="font-bold text-xl">Save Review</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
