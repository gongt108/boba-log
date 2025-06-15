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
import { Checkbox, RadioButton } from 'react-native-paper';

import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppwrite } from '@/lib/useAppwrite';

import {
	createOrder,
	CreateOrderParams,
	createPosts,
	getCurrentUser,
	getOrders,
	Ice,
	Milk,
	Size,
	Sweetness,
	Toppings,
} from '@/lib/appwrite';
import {
	iceLevels,
	milkChoices,
	sizeOptions,
	sweetLevels,
	toppingOptions,
} from '@/constants/customizations';

type OrderFormProps = {
	drink: string;
};

const OrderForm = ({ drink }: OrderFormProps) => {
	const [formData, setFormData] = useState({
		drink: drink,
		size: 'default' as Size,
		sweetness: 'default' as Sweetness,
		ice: 'default' as Ice,
		milk: 'default' as Milk,
		other: '',
		toppings: [] as Toppings[],
	} as CreateOrderParams);
	const [otherToppings, setOtherToppings] = useState('');
	const [otherInfo, setOtherInfo] = useState('');

	const { data: user } = useAppwrite({
		fn: getCurrentUser,
	});

	const selectCustomization = <K extends keyof typeof formData>(
		field: K,
		value: (typeof formData)[K]
	) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const toggleTopping = (topping: Toppings) => {
		setFormData((prev) => ({
			...prev,
			toppings: prev.toppings.includes(topping)
				? prev.toppings.filter((t) => t !== topping)
				: [...prev.toppings, topping],
		}));
	};

	const { data: orders, loading } = useAppwrite({
		fn: getOrders,
	});

	const saveOrder = async () => {
		const order = await createOrder({
			drink: formData.drink,
			size: formData.size,
			ice: formData.ice,
			sweetness: formData.sweetness,
			milk: formData.milk,
			topping: otherToppings,
			toppings: formData.toppings,
			other: otherInfo,
		});

		if (order) {
			router.push(`/reviews/${order.$id}`);
		}
	};

	// const saveOrder = () => {
	// 	router.push(`/reviews/682eb270002b4f627789`);
	// };

	return (
		<View className="mt-4">
			<View className=" px-8 pt-4 mb-4">
				<Text className="font-semibold text-xl">Size</Text>
				<Text className="text-lg mb-2">Choose 1</Text>
				{sizeOptions.map(({ label, value }) => (
					<TouchableHighlight
						underlayColor="#DDDDDD"
						className="flex flex-row rounded-2xl"
						onPress={() => selectCustomization('size', value)}
						key={value}
					>
						<View
							className="flex flex-row
											"
						>
							<RadioButton
								value="regular"
								status={formData.size === value ? 'checked' : 'unchecked'}
								onPress={() => selectCustomization('size', value)}
							/>
							<Text className="items-center flex text-lg">{label}</Text>
						</View>
					</TouchableHighlight>
				))}
			</View>
			{/* Sugar Level */}
			<View className="border-t border-slate-300 px-8 py-4 my-4 w-full flex-grow">
				<Text className="font-semibold text-xl">Sugar</Text>
				<Text className="text-lg mb-2">Choose 1</Text>
				<View className="w-full flex-row flex-wrap justify-between">
					{sweetLevels.map(({ label, value }) => (
						<TouchableHighlight
							key={value}
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							className="flex flex-row rounded-2xl w-1/2"
							onPress={() => selectCustomization('sweetness', value)}
						>
							<View
								className="flex flex-row
																	"
							>
								<RadioButton
									value={value}
									status={
										formData.sweetness === value ? 'checked' : 'unchecked'
									}
									onPress={() => selectCustomization('sweetness', value)}
								/>
								<Text className="items-center flex text-lg">{label}</Text>
							</View>
						</TouchableHighlight>
					))}
				</View>
			</View>
			{/* Ice Level */}
			<View className="border-t border-slate-300 px-8 py-4 my-4 w-full flex-grow">
				<Text className="font-semibold text-xl">Iced/Hot</Text>
				<Text className="text-lg mb-2">Choose 1</Text>
				<View className="w-full flex-row flex-wrap justify-between">
					{iceLevels.map(({ label, value }) => (
						<TouchableHighlight
							key={value}
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							className="flex flex-row rounded-2xl w-1/2"
							onPress={() => selectCustomization('ice', value)}
						>
							<View
								className="flex flex-row
																	"
							>
								<RadioButton
									value={value}
									status={formData.ice === value ? 'checked' : 'unchecked'}
									onPress={() => selectCustomization('ice', value)}
								/>
								<Text className="items-center flex text-lg">{label}</Text>
							</View>
						</TouchableHighlight>
					))}
				</View>
			</View>
			{/* Milk Choices */}
			<View className="border-t border-slate-300 px-8 py-4 my-4 w-full flex-grow">
				<Text className="font-semibold text-xl">Milk</Text>
				<Text className="text-lg mb-2">Choose 1</Text>
				<View className="w-full flex-row flex-wrap justify-between">
					{milkChoices.map(({ label, value }) => (
						<TouchableHighlight
							key={value}
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							className="flex flex-row rounded-2xl w-1/2"
							onPress={() => selectCustomization('milk', value)}
						>
							<View
								className="flex flex-row
																	"
							>
								<RadioButton
									value={value}
									status={formData.milk === value ? 'checked' : 'unchecked'}
									onPress={() => selectCustomization('milk', value)}
								/>
								<Text className="items-center flex text-lg">{label}</Text>
							</View>
						</TouchableHighlight>
					))}
				</View>
			</View>
			{/* Toppings */}
			<View className="border-t border-slate-300 px-8 py-4 my-4 w-full flex-grow">
				<Text className="font-semibold text-xl">Toppings</Text>
				<View className="w-full flex-row flex-wrap justify-between mt-2">
					{toppingOptions.map(({ label, value }) => (
						<TouchableHighlight
							key={value}
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							className="flex flex-row rounded-2xl w-1/2 max-w-1/2 overflow-hidden"
							onPress={() => toggleTopping(value)}
						>
							<View
								className="flex flex-row overflow-hidden items-center
																	"
							>
								<Checkbox
									status={
										formData.toppings.includes(value) ? 'checked' : 'unchecked'
									}
									onPress={() => toggleTopping(value)}
								/>
								<Text numberOfLines={1} className="items-center flex text-lg ">
									{label}
								</Text>
							</View>
						</TouchableHighlight>
					))}
					{formData.toppings.includes(
						toppingOptions.at(-1)?.value as Toppings
					) && (
						<View className="w-1/2 -ml-7/8 flex-row items-center">
							<TextInput
								className="outline-none underline"
								placeholder="Input toppings here..."
								placeholderTextColor="#949494"
								onChangeText={setOtherToppings}
							/>
						</View>
					)}
				</View>
			</View>
			{/* Other Information */}
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
			</View>
			<TouchableOpacity
				onPress={() => saveOrder()}
				className="mx-auto py-2 px-4 mb-12 mt-8 border rounded-2xl bg-gray-200"
			>
				<Text className="font-bold text-xl">Save Order</Text>
			</TouchableOpacity>
		</View>
	);
};

export default OrderForm;
