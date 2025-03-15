import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';
import { router } from 'expo-router';

import images from '@/constants/images';

interface Drink {
	img: ImageSourcePropType;
	name: string;
}

interface DrinkProps {
	drink: Drink;
}

const DrinkCard = ({ drink }: DrinkProps) => {
	const handleCardPress = () => router.push(`/store`);

	return (
		<TouchableOpacity
			activeOpacity={0.6}
			// underlayColor="#DDDDDD"
			className="flex border-b border-slate-300"
			onPress={() => handleCardPress()}
		>
			<View className="flex flex-row my-4 items-center ">
				<Image
					source={drink.img}
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
		</TouchableOpacity>
	);
};

export default DrinkCard;
