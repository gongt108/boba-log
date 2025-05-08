import {
	Image,
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { Checkbox, RadioButton } from 'react-native-paper';

import OrderForm from '@/components/OrderForm';
import PastReview from '@/components/PastReview';

import Ionicons from '@expo/vector-icons/Ionicons';
import images from '@/constants/images';

export default function Order() {
	const [isOrdering, setIsOrdering] = useState(false);

	return (
		<View className="relative flex-1">
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
			<View className="mt-4 border-y border-slate-300">
				<TouchableOpacity onPress={() => setIsOrdering(!isOrdering)}>
					<View className="my-4 ">
						{isOrdering ? (
							<View className="flex flex-row justify-end me-4">
								<Text className="text-lg">To see past orders, </Text>
								<Text className="text-blue-600 flex text-lg">
									Hide Order Form
								</Text>
							</View>
						) : (
							<Text className="text-blue-600 flex justify-end me-4 text-lg">
								Show Order Form
							</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>

			{!isOrdering && (
				<ScrollView className="mt-4">
					<PastReview />
				</ScrollView>
			)}

			{isOrdering && (
				<ScrollView>
					<OrderForm />
				</ScrollView>
			)}
			<TouchableOpacity
				className=" absolute top-8 left-6 opacity-55"
				onPress={() => router.back()}
			>
				<Ionicons name="arrow-back" color="#ccae88" size={32} />
			</TouchableOpacity>
		</View>
	);
}
