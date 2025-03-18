import {
	Image,
	View,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Checkbox, RadioButton } from 'react-native-paper';

import images from '@/constants/images';

export default function Order() {
	const [size, setSize] = useState('regular');
	const [sweetLevel, setSweetLevel] = useState('default');
	const [iceLevel, setIceLevel] = useState('default');
	const [milkChoice, setMilkChoice] = useState('default');
	const [toppings, setToppings] = useState(['honey-boba', 'grass-jelly']);
	const [checked, setChecked] = React.useState(false);

	const sweetLevels = [
		{ label: 'Not Sweet', value: 'none' },
		{ label: 'Slightly Sweet', value: 'slightly' },
		{ label: 'Half Sweet', value: 'half' },
		{ label: 'Less Sweet', value: 'less' },
		{ label: 'Full Sweet', value: 'full' },
		{ label: 'Extra Sweet', value: 'extra' },
		{ label: 'Default', value: 'default' },
	];

	const iceLevels = [
		{ label: 'No Ice', value: 'none' },
		{ label: 'Half Ice', value: 'half' },
		{ label: 'Less Ice', value: 'less' },
		{ label: 'Full Ice', value: 'full' },
		{ label: 'Default', value: 'default' },
		{ label: 'Hot', value: 'hot' },
	];

	const milkChoices = [
		{ label: 'Default', value: 'default' },
		{ label: 'None', value: 'none' },
		{ label: 'Almond Milk', value: 'almond-milk' },
		{ label: 'Fresh Milk', value: 'fresh milk' },
		{ label: 'Half & half', value: 'half-half' },
		{ label: 'Lactose Free', value: 'lactose-free' },
		{ label: 'Soy Milk', value: 'soy-milk' },
		{ label: 'Oat Milk', value: 'oat-milk' },
	];

	const toppingOptions = [
		{ label: 'Agar/Crystal Boba', value: 'crystal-boba' },
		{ label: 'Aloe Vera', value: 'aloe' },
		{ label: 'Brown Sugar Boba', value: 'brown-sugar-boba' },
		{ label: 'Cheese Foam', value: 'coffee-jelly' },
		{ label: 'Grass Jelly', value: 'grass-jelly' },
		{ label: 'Honey Boba', value: 'honey-boba' },
		{ label: 'Lychee Jelly', value: 'lychee-jelly' },
		{ label: 'Pudding', value: 'pudding' },
		{ label: 'Strawberry Popping Boba', value: 'strawberry-popping-boba' },
		{ label: 'Taro', value: 'taro' },
	];

	const changeToppings = (topping) => {
		let toppingsList = [...new Set([...toppings])];
		if (toppings.includes(topping)) {
			toppingsList = toppingsList.filter((item) => item != topping);
		} else if (!toppings.includes(topping)) {
			toppingsList = [...new Set([...toppings, topping])];
		}
		setToppings(toppingsList);
	};

	const setOther = () => {
		setChecked(!checked);
		changeToppings('other');
	};

	console.log(toppings);

	return (
		<View className="flex-1 overflow-scroll">
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
			<View className="mt-4 ">
				<View className="border-t border-slate-300 px-8 pt-4 mb-4">
					<Text className="font-semibold text-xl">Size</Text>
					<Text className="text-lg mb-2">Choose 1</Text>
					<TouchableHighlight
						underlayColor="#DDDDDD"
						className="flex flex-row rounded-2xl"
						onPress={() => setSize('regular')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="regular"
								status={size === 'regular' ? 'checked' : 'unchecked'}
								onPress={() => setSize('regular')}
							/>
							<Text className="items-center flex text-lg">Regular</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						className="flex flex-row rounded-2xl"
						underlayColor="#DDDDDD"
						onPress={() => setSize('large')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="large"
								status={size === 'large' ? 'checked' : 'unchecked'}
								onPress={() => setSize('large')}
							/>
							<Text className="items-center flex text-lg">Large</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						className="flex flex-row rounded-2xl"
						underlayColor="#DDDDDD"
						onPress={() => setSize('other')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="other"
								status={size === 'other' ? 'checked' : 'unchecked'}
								onPress={() => setSize('other')}
							/>
							<Text className="items-center flex text-lg">Other</Text>
						</View>
					</TouchableHighlight>
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
								onPress={() => setSweetLevel(value)}
							>
								<View
									className="flex flex-row
                                                "
								>
									<RadioButton
										value={value}
										status={sweetLevel === value ? 'checked' : 'unchecked'}
										onPress={() => setSweetLevel(value)}
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
								onPress={() => setIceLevel(value)}
							>
								<View
									className="flex flex-row
                                                "
								>
									<RadioButton
										value={value}
										status={iceLevel === value ? 'checked' : 'unchecked'}
										onPress={() => setIceLevel(value)}
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
								onPress={() => setMilkChoice(value)}
							>
								<View
									className="flex flex-row
                                                "
								>
									<RadioButton
										value={value}
										status={milkChoice === value ? 'checked' : 'unchecked'}
										onPress={() => setMilkChoice(value)}
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
								onPress={() => changeToppings(value)}
							>
								<View
									className="flex flex-row overflow-hidden
                                                "
								>
									<Checkbox
										status={toppings.includes(value) ? 'checked' : 'unchecked'}
										onPress={() => changeToppings(value)}
									/>
									<Text className="items-center flex text-lg ">{label}</Text>
								</View>
							</TouchableHighlight>
						))}
						<TouchableOpacity
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							className="flex flex-row rounded-2xl overflow-hidden"
						>
							<View
								className="flex flex-row
                                                "
							>
								<Checkbox
									status={checked ? 'checked' : 'unchecked'}
									onPress={() => {
										setOther();
									}}
								/>
								<Text
									className="items-center flex text-lg"
									onPress={() => setOther()}
								>
									Other
								</Text>
								{checked && (
									<TextInput
										className="ms-4 outline-none underline"
										placeholder="Input toppings here..."
										placeholderTextColor="#949494"
									/>
								)}
							</View>
						</TouchableOpacity>
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
						/>
					</View>
				</View>
				<TouchableOpacity className="mx-auto py-2 px-4 mb-12 mt-8 border rounded-2xl bg-gray-200">
					<Text className="font-bold text-xl">Save Order</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity className="absolute">
				<Text>Back</Text>
			</TouchableOpacity>
		</View>
	);
}
