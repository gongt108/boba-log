import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const PastReview = () => {
	const [seeThat, setSeeThat] = useState(false);

	return (
		<View className="mx-4 ">
			<Text className="text-xl font-semibold">Past Orders</Text>
			{/* <Text className="text-md">No past orders yet.</Text> */}
			<View className="mt-2">
				<Text className="text-gray-500">03/23/2025</Text>
				{!seeThat && (
					<View>
						<Text className="text-lg">
							Customizations: 50% Sweet, Light Ice, Grass Jelly
						</Text>
						<Text className="text-lg">Review: Too sweet</Text>
					</View>
				)}
				<TouchableOpacity onPress={() => setSeeThat(!seeThat)}>
					<Text className="text-blue-500">
						{seeThat ? 'Show less' : 'See more...'}
					</Text>
				</TouchableOpacity>
				{seeThat && (
					<View className="flex flex-row flex-wrap mt-2">
						<View className="w-1/3 p-2">
							<Text>Category</Text>
						</View>
						<View className="w-1/3 border-x border-gray-300 p-2">
							<Text>Customizations</Text>
						</View>
						<View className="w-1/3 p-2">
							<Text>Review</Text>
						</View>
						<View className="w-1/3 border-t border-gray-300 bg-gray-200 p-2">
							Size
						</View>
						<View className="w-1/3 border border-b-0 border-gray-300 bg-gray-200 p-2">
							<Text>Default</Text>
						</View>
						<View className="w-1/3 border-t border-gray-300 bg-gray-200 p-2"></View>
						<View className="w-1/3 border-t border-gray-300 p-2">
							<Text>Sweetness</Text>
						</View>
						<View className="w-1/3 border border-b-0 border-gray-300 p-2">
							Half Sweet
						</View>
						<View className="w-1/3 border-t border-gray-300 p-2">
							<Text>Too Sweet</Text>
						</View>
					</View>
				)}
			</View>
		</View>
	);
};

export default PastReview;
