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

const sizeOptions: { label: string; value: Size }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'Regular', value: 'regular' },
	{ label: 'Large', value: 'large' },
];

const sweetLevels: { label: string; value: Sweetness }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'No Sugar', value: 'no sugar' },
	{ label: 'Little Sugar', value: 'little sugar' },
	{ label: 'Half Sugar', value: 'half sugar' },
	{ label: 'Less Sugar', value: 'less sugar' },
	{ label: 'Full Sugar', value: 'full sugar' },
	{ label: 'Extra Sugar', value: 'extra sugar' },
];

const iceLevels: { label: string; value: Ice }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'Hot', value: 'hot' },
	{ label: 'No Ice', value: 'none' },
	{ label: 'Little Ice', value: 'little ice' },
	{ label: 'Half Ice', value: 'half ice' },
	{ label: 'Less Ice', value: 'less ice' },
	{ label: 'Full Ice', value: 'full ice' },
];

const milkChoices: { label: string; value: Milk }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'None', value: 'none' },
	{ label: '2% Milk', value: '2%' },
	{ label: 'Almond Milk', value: 'almond' },
	{ label: 'Fresh Milk', value: 'fresh' },
	{ label: 'Half & half', value: 'half&half' },
	{ label: 'Heavy Cream', value: 'cream' },
	{ label: 'Lactose Free', value: 'lactose-free' },
	{ label: 'Oat Milk', value: 'oat' },
	{ label: 'Soy Milk', value: 'soy' },
	{ label: 'Whole Milk', value: 'whole' },
];

const toppingOptions: { label: string; value: Toppings }[] = [
	{ label: 'Agar/Crystal Boba', value: 'crystal-boba' },
	{ label: 'Aloe Vera', value: 'aloe' },
	{ label: 'Brown Sugar Boba', value: 'brown-sugar-boba' },
	{ label: 'Cheese Foam', value: 'cheese-foam' },
	{ label: 'Grass Jelly', value: 'grass-jelly' },
	{ label: 'Honey Boba', value: 'honey-boba' },
	{ label: 'Lychee Jelly', value: 'lychee-jelly' },
	{ label: 'Pudding', value: 'pudding' },
	{ label: 'Strawberry Popping Boba', value: 'strawberry-popping-boba' },
	{ label: 'Taro', value: 'taro' },
	{ label: 'Other', value: 'other' },
];

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
		await createOrder({
			drink: formData.drink,
			size: formData.size,
			ice: formData.ice,
			sweetness: formData.sweetness,
			milk: formData.milk,
			topping: formData.topping,
			toppings: formData.toppings,
		});
	};

	return (
		<View className="mt-4">
			{orders && <Text>Exists</Text>}
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
