import { Image, Text, TouchableHighlight, View } from 'react-native';
import { router } from 'expo-router';
import { Models } from 'react-native-appwrite';
import images from '@/constants/images';

interface Props {
	item: Models.Document;
}

export const StoreCard = ({ item }: Props) => {
	const handleCardPress = () => router.push(`/store`);
	console.log(item);

	return (
		<TouchableHighlight
			activeOpacity={0.6}
			underlayColor="#DDDDDD"
			className="flex border-b border-slate-300"
			onPress={() => handleCardPress()}
		>
			<View className="flex flex-row my-4 items-center ">
				<Image
					source={{ uri: item.logo_photo }}
					resizeMode="contain"
					className="w-[64px] h-[64px] rounded-full"
					style={{
						width: 64, // 64px
						height: 64, // 64px
						borderRadius: 32, // Half of the width/height for circular image
					}}
				/>
				<View className="flex flex-col">
					<Text className="ms-4 text-lg">{item.name}</Text>
					<Text className="ms-4 text-gray-600">Sunnyvale, CA</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
};
