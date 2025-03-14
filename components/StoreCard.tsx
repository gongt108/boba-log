import { Image, Text, TouchableHighlight, View } from 'react-native';
import { router } from 'expo-router';

import images from '@/constants/images';

export const StoreCard = () => {
	const handleCardPress = () => router.push(`/store`);

	return (
		<TouchableHighlight
			activeOpacity={0.6}
			underlayColor="#DDDDDD"
			className="flex border-b border-slate-300"
			onPress={() => handleCardPress()}
		>
			<View className="flex flex-row my-4 items-center ">
				<Image
					source={images.heyteaLogo}
					resizeMode="contain"
					className="w-[64px] h-[64px] rounded-full"
					style={{
						width: 64, // 64px
						height: 64, // 64px
						borderRadius: 32, // Half of the width/height for circular image
					}}
				/>
				<View className="flex flex-col">
					<Text className="ms-4 text-lg">HeyTea</Text>
					<Text className="ms-4 text-gray-600">Sunnyvale, CA</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
};
