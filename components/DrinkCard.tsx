import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';
import { router } from 'expo-router';
import { Models } from 'react-native-appwrite';

import Ionicons from '@expo/vector-icons/Ionicons';

import images from '@/constants/images';

interface Props {
	drink: Models.Document;
}

const DrinkCard = ({ drink }: Props) => {
	const handleCardPress = () => router.push(`/drinks/${drink.$id}`);

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			// underlayColor="#DDDDDD"
			className="flex border-b border-slate-300"
			onPress={() => handleCardPress()}
		>
			<View className="flex flex-row my-4 items-center justify-between">
				<View className="flex flex-row items-center">
					<Image
						source={{ uri: drink.image }}
						resizeMode="contain"
						className="w-[64px] h-[64px] rounded-full"
						style={{
							width: 64, // 64px
							height: 64, // 64px
							borderRadius: 32, // Half of the width/height for circular image
						}}
					/>
					<Text className="ms-4 text-lg">{drink.name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default DrinkCard;
