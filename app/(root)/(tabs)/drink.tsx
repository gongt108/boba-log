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

export default function Drink() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleCardPress = () => router.push(`/find`);

	return (
		<View className="overflow-scroll relative">
			<View className="mx-auto mt-8">
				<Image
					source={images.heyteaMoyunCoconutBlue}
					className="rounded-full"
				/>
				<Text className="mt-4 text-2xl text-center font-semibold">
					Moyun Coconut Blue
				</Text>
				<Text className="text-center text-lg">HeyTea</Text>
			</View>

			<View className="mt-8 mx-8">
				<View className="flex">
					<View className="flex flex-row justify-between mt-4">
						<Text className="text-lg">Drinks</Text>
					</View>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						className="flex border-b border-slate-300"
						onPress={() => handleCardPress()}
					>
						<View className="flex flex-row my-4 items-center ">
							<Image
								source={images.heyteaJasmineLatte}
								resizeMode="contain"
								className="w-[64px] h-[64px] rounded-full"
								style={{
									width: 64, // 64px
									height: 64, // 64px
									borderRadius: 32, // Half of the width/height for circular image
								}}
							/>
							<Text className="ms-4 text-lg">Jasmine Latte</Text>
						</View>
					</TouchableHighlight>
					<DrinkCard
						drink={{
							name: 'Moyun Coconut Blue',
							img: images.heyteaMoyunCoconutBlue,
						}}
					/>
				</View>
			</View>
		</View>
	);
}
