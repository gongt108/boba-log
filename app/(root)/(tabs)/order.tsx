import { Image, Input, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';

import images from '@/constants/images';

export default function Order() {
	const [size, setSize] = useState('default');
	const [sweetLevel, setSweetLevel] = useState('default');
	const [iceLevel, setIceLevel] = useState('default');
	const [milkChoice, setMilkChoice] = useState('default');
	const [toppings, setToppings] = useState('none');

	return (
		<View className="flex">
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
				<View className="border-t border-slate-300 px-8 pt-4">
					<Text className="font-semibold text-xl">Size</Text>
					<Text className="text-lg mb-2">Choose 1</Text>
					<TouchableOpacity
						className="flex flex-row"
						onPress={() => setSize('default')}
					>
						<RadioButton
							value="default"
							status={size === 'default' ? 'checked' : 'unchecked'}
							onPress={() => setSize('default')}
						/>
						<Text className="items-center flex text-lg">Default</Text>
					</TouchableOpacity>
				</View>
				<RadioButton
					value="default"
					status={sweetLevel === 'default' ? 'checked' : 'unchecked'}
					onPress={() => setSweetLevel('default')}
				/>
			</View>
		</View>
	);
}
