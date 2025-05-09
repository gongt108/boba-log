import React, { useState } from 'react';
import {
	Text,
	TextInput,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { router } from 'expo-router';

import images from '@/constants/images';
import DrinkCard from '@/components/DrinkCard';

type ReviewFormProps = {
	drink: object;
	order: object;
};

const ReviewForm = ({ drink, order }: ReviewFormProps) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [otherInfo, setOtherInfo] = useState('');

	const handleCardPress = () => router.push(`/find`);

	return (
		<View className="flex-1">
			<View className="overflow-scroll flex-1">
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
						<Text className="text-xl font-semibold">
							What would you change?
						</Text>
						<Text className="text-lg mt-2">Size: Default</Text>
						<View className="flex-row space-x-2 items-center mt-2">
							<TouchableOpacity
								activeOpacity={0.6}
								className="h-fit w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">Perfect</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.6}
								className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">Too Big</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.6}
								className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">Too Small</Text>
							</TouchableOpacity>
						</View>
						<Text className="text-lg mt-2">Ice: Default</Text>
						<View className="flex-row space-x-2 mt-2">
							<TouchableOpacity
								activeOpacity={0.6}
								className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md items-center text-center">
									Perfect
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.6}
								className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">More Ice</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.6}
								className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">Less Ice</Text>
							</TouchableOpacity>
						</View>
						<Text className="text-lg mt-2">Sugar: Default</Text>
						<View className="flex-row space-x-2 items-center mt-2">
							<TouchableOpacity
								activeOpacity={0.6}
								className="h-fit w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">Perfect</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.6}
								className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">Too Sweet</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.6}
								className="w-1/3 border-b border-slate-200 bg-slate-200 rounded-full px-4 py-2"
								onPress={() => handleCardPress()}
							>
								<Text className="text-md text-center">Not Sweet</Text>
							</TouchableOpacity>
						</View>
						<Text className="text-lg mt-2">Toppings: Grass Jelly</Text>
						{/* <View className="flex-row justify-between items-center mx-4 mt-2">
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
                        </View> */}
					</View>
				</View>
				<View className="border-t border-slate-300 px-8 py-4  w-full flex-grow">
					<Text className="font-semibold text-xl">Other Information</Text>
					<View className="w-full border border-slate-300 rounded-lg h-24 mt-2">
						<TextInput
							className="p-4 outline-teal-700"
							placeholder="Modifications, corrections, etc..."
							placeholderTextColor="#949494"
							numberOfLines={4}
							multiline={true}
							onChangeText={setOtherInfo}
						/>
					</View>
					<Text className="text-lg mt-2">Would you get again?</Text>
					<View className="flex-row justify-between items-center mx-4 mt-2">
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
			</View>
			<View className="flex flex-row mx-auto space-x-4">
				<TouchableOpacity
					// onPress={() => saveOrder()}
					className="py-2 px-4 mb-12 mt-8 border rounded-2xl bg-gray-200"
				>
					<Text className="font-bold text-xl">Skip</Text>
				</TouchableOpacity>
				<TouchableOpacity
					// onPress={() => saveOrder()}
					className="py-2 px-4 mb-12 mt-8 border rounded-2xl bg-gray-700"
				>
					<Text className="font-bold text-xl text-gray-200">Save Review</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ReviewForm;
