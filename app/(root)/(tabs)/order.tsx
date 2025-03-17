import {
	Image,
	Input,
	View,
	Text,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';

import images from '@/constants/images';

export default function Order() {
	const [size, setSize] = useState('regular');
	const [sweetLevel, setSweetLevel] = useState('default');
	const [iceLevel, setIceLevel] = useState('default');
	const [milkChoice, setMilkChoice] = useState('default');
	const [toppings, setToppings] = useState('none');

	const sweetLevels = [
		{ label: 'Default', value: 'default' },
		{ label: 'Not Sweet', value: 'none' },
		{ label: 'Minimal Sweet', value: 'minimal' },
		{ label: 'Half Sweet', value: 'half' },
		{ label: 'Less Sweet', value: 'less' },
		{ label: 'Full Sweet', value: 'full' },
		{ label: 'Extra Sweet', value: 'extra' },
	];

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
				<View className="border-t border-slate-300 px-8 pt-4 mb-4 w-full">
					<Text className="font-semibold text-xl">Sugar</Text>
					<Text className="text-lg mb-2">Choose 1</Text>
					{sweetLevels.map(({ label, value }) => (
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							className="flex flex-row rounded-2xl max-w-1/2"
							onPress={() => setSweetLevel(value)}
						>
							<View
								className="flex flex-row
                        "
							>
								<RadioButton
									value="extra"
									status={sweetLevel === value ? 'checked' : 'unchecked'}
									onPress={() => setSweetLevel(value)}
								/>
								<Text className="items-center flex text-lg">{label}</Text>
							</View>
						</TouchableHighlight>
					))}
				</View>
				{/* Ice Level */}
				<View className="border-t border-slate-300 px-8 pt-4">
					<Text className="font-semibold text-xl">Sugar</Text>
					<Text className="text-lg mb-2">Choose 1</Text>
					<TouchableHighlight
						activeOpacity={0.6}
						className="flex flex-row rounded-2xl"
						underlayColor="#DDDDDD"
						onPress={() => setSweetLevel('default')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="default"
								status={sweetLevel === 'default' ? 'checked' : 'unchecked'}
								onPress={() => setSweetLevel('default')}
							/>
							<Text className="items-center flex text-lg">Default</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						className="flex flex-row rounded-2xl"
						underlayColor="#DDDDDD"
						onPress={() => setSweetLevel('none')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="none"
								status={sweetLevel === 'none' ? 'checked' : 'unchecked'}
								onPress={() => setSweetLevel('none')}
							/>
							<Text className="items-center flex text-lg">Not Sweet</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						className="flex flex-row rounded-2xl"
						onPress={() => setSweetLevel('minimal')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="minimal"
								status={sweetLevel === 'minimal' ? 'checked' : 'unchecked'}
								onPress={() => setSweetLevel('minimal')}
							/>
							<Text className="items-center flex text-lg">Minimal Sweet</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						className="flex flex-row rounded-2xl"
						onPress={() => setSweetLevel('half')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="half"
								status={sweetLevel === 'half' ? 'checked' : 'unchecked'}
								onPress={() => setSweetLevel('half')}
							/>
							<Text className="items-center flex text-lg">Half Sweet</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						className="flex flex-row rounded-2xl"
						onPress={() => setSweetLevel('less')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="less"
								status={sweetLevel === 'less' ? 'checked' : 'unchecked'}
								onPress={() => setSweetLevel('less')}
							/>
							<Text className="items-center flex text-lg">Less Sweet</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						className="flex flex-row rounded-2xl"
						onPress={() => setSweetLevel('full')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="full"
								status={sweetLevel === 'full' ? 'checked' : 'unchecked'}
								onPress={() => setSweetLevel('full')}
							/>
							<Text className="items-center flex text-lg">Full Sweet</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						className="flex flex-row rounded-2xl"
						onPress={() => setSweetLevel('extra')}
					>
						<View
							className="flex flex-row
                        "
						>
							<RadioButton
								value="extra"
								status={sweetLevel === 'extra' ? 'checked' : 'unchecked'}
								onPress={() => setSweetLevel('extra')}
							/>
							<Text className="items-center flex text-lg">Extra Sweet</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}
