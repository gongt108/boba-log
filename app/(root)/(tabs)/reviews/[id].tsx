import {
	ActivityIndicator,
	Image,
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

import { useAppwrite } from '@/lib/useAppwrite';
import {
	getDrinkById,
	getOrders,
	createPosts,
	getOrderById,
} from '@/lib/appwrite';

import images from '@/constants/images';
import {
	iceLevels,
	milkChoices,
	sizeOptions,
	sweetLevels,
	toppingOptions,
} from '@/constants/customizations';

export default function Review() {
	const [searchQuery, setSearchQuery] = useState('');
	const { id } = useLocalSearchParams<{ id?: string }>();
	const [orderData, setOrderData] = useState({
		size: '',
		sweetness: '',
		ice: '',
		other: '',
	});
	const [reviewData, setReviewData] = useState({
		size: '0',
		sweetness: '0',
		ice: '0',
		repeat: null,
	});

	// console.log(id);

	const { data: order, loading } = useAppwrite({
		fn: getOrderById,
		params: {
			id: id!,
		},
	});

	useEffect(() => {
		if (!loading && order) {
			setOrderData({
				size: order?.size,
				sweetness: order?.sweetness,
				ice: order?.ice,
				other: order?.other,
			});
		}
	}, [loading, order]);

	// const [otherInfo, setOtherInfo] = useState();

	const sizeReview = ['Perfect', 'Too Big', 'Too Small'];
	const iceReview = ['Perfect', 'Too Much', 'Too Little'];
	const sweetnessReview = ['Perfect', 'Too Sweet', 'Not Sweet'];

	const handleCardPress = () => router.push(`/find`);

	const getCustomizationLabel = (list, value) => {
		const label = list.find((item) => item.value === value)?.label;
		return label;
	};

	const getToppings = () => {
		let toppings = order.toppings;
		toppings = toppings.map(
			(topping) => toppingOptions.find((item) => item.value === topping)?.label
		);
		if (toppings.at(-1) == 'Other') {
			toppings[toppings.length - 1] = order.topping;
		}

		return toppings.join(', ');
	};

	if (order) getToppings();

	const updateReview = (k, category) => {
		setReviewData((prev) => ({
			...prev,
			[category]: k,
		}));
	};

	console.log(reviewData);

	if (loading) {
		return <ActivityIndicator className="text-primary-300" size="large" />;
	}

	return (
		<View className="flex-1">
			<View className="overflow-scroll flex-1">
				<View className="mx-auto mt-20 flex items-center">
					<Image
						source={{
							uri: `${order?.drink?.image}`,
						}}
						style={{
							width: 150,
							height: 150,
						}}
						resizeMode="cover"
						className="rounded-full"
					/>
					<Text className="mt-4 text-2xl text-center font-semibold">
						{order?.drink.name}
					</Text>
					<Text className="text-center text-lg">
						{order?.drink.stores[0].name}
					</Text>
				</View>
				<ScrollView>
					<View className="mt-8 border-t border-slate-300">
						<View className="p-8">
							<Text className="text-xl font-semibold">
								What would you change?
							</Text>
							<Text className="text-lg mt-2">
								Size: {getCustomizationLabel(sweetLevels, 'default')}
							</Text>
							<View className="flex-row justify-between items-center mt-2">
								{sizeReview.map((option, k) => (
									<TouchableOpacity
										activeOpacity={0.6}
										className={`h-fit w-[30%] border-b border-slate-200 ${
											reviewData.size == k.toString()
												? 'bg-slate-800'
												: 'bg-slate-200'
										} rounded-full px-4 py-2`}
										onPress={() => updateReview(k.toString(), 'size')}
										key={k}
									>
										<Text
											className={`text-md text-center ${
												reviewData.size == k.toString()
													? 'text-white font-bold'
													: ''
											}`}
										>
											{option}
										</Text>
									</TouchableOpacity>
								))}
							</View>
							<Text className="text-lg mt-2">Ice: Default</Text>
							<View className="flex-row justify-between items-center mt-2">
								{iceReview.map((option, k) => (
									<TouchableOpacity
										activeOpacity={0.6}
										className={`h-fit w-[30%] border-b border-slate-200 ${
											reviewData.ice == k.toString()
												? 'bg-slate-800'
												: 'bg-slate-200'
										} rounded-full px-4 py-2`}
										onPress={() => updateReview(k.toString(), 'ice')}
										key={k}
									>
										<Text
											className={`text-md text-center ${
												reviewData.ice == k.toString()
													? 'text-white font-bold'
													: ''
											}`}
										>
											{option}
										</Text>
									</TouchableOpacity>
								))}
							</View>
							<Text className="text-lg mt-2">
								Sugar: {getCustomizationLabel(sweetLevels, 'default')}
							</Text>
							<View className="flex-row justify-between items-center mt-2">
								{sweetnessReview.map((option, k) => (
									<TouchableOpacity
										activeOpacity={0.6}
										className={`h-fit w-[30%] border-b border-slate-200 ${
											reviewData.sweetness == k.toString()
												? 'bg-slate-800'
												: 'bg-slate-200'
										} rounded-full px-4 py-2`}
										onPress={() => updateReview(k.toString(), 'sweetness')}
										key={k}
									>
										<Text
											className={`text-md text-center ${
												reviewData.sweetness == k.toString()
													? 'text-white font-bold'
													: ''
											}`}
										>
											{option}
										</Text>
									</TouchableOpacity>
								))}
							</View>
							<Text className="text-lg mt-2">
								Toppings: {order?.toppings.length ? `${getToppings()}` : 'None'}
							</Text>
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
								onChangeText={(text) =>
									setOrderData((prev) => ({ ...prev, other: text }))
								}
								value={orderData.other}
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
				</ScrollView>
			</View>
			<View className="flex flex-row mx-auto">
				{order?.review ? (
					<TouchableOpacity
						onPress={() => router.back()}
						className="py-2 px-4 mb-12 mt-8 border rounded-2xl bg-gray-200"
					>
						<Text className="font-bold text-xl">Cancel</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						onPress={() => router.push(`/`)}
						className="py-2 px-4 mb-12 mt-8 border rounded-2xl bg-gray-200"
					>
						<Text className="font-bold text-xl">Skip</Text>
					</TouchableOpacity>
				)}

				<TouchableOpacity
					// onPress={() => saveReview()}
					className="py-2 px-4 ms-4 mb-12 mt-8 border rounded-2xl bg-gray-700"
				>
					<Text className="font-bold text-xl text-gray-200">Save Review</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
