import {
	Alert,
	Image,
	ImageSourcePropType,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { router } from 'expo-router';

import { logout } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';

import Ionicons from '@expo/vector-icons/Ionicons';
//   import { settings } from "@/constants/data";

interface SettingsItemProp {
	icon: 'home' | 'settings' | 'notifications' | 'person' | string;
	title: string;
	color?: string;
	onPress?: () => void;
}

const SettingsItem = ({
	icon,
	title,
	color = 'black',
	onPress,
}: SettingsItemProp) => (
	<TouchableOpacity
		onPress={onPress}
		className="flex flex-row items-center justify-between py-3 ps-4"
	>
		<View className="flex flex-row items-center gap-3">
			<Ionicons name={icon} size={24} color={color} />
			<Text className={`text-lg font-sourGummy-medium text-black-300`}>
				{title}
			</Text>
		</View>
	</TouchableOpacity>
);

const Profile = () => {
	const { user, refetch } = useGlobalContext();

	const handleLogout = async () => {
		const result = await logout();
		if (result) {
			Alert.alert('Success', 'Logged out successfully');
			refetch();
		} else {
			Alert.alert('Error', 'Failed to logout');
		}
	};

	return (
		<SafeAreaView className="h-full bg-white relative">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerClassName="pb-32 px-7"
			>
				<View className="flex flex-row justify-center mt-5">
					<View className="flex flex-col items-center relative mt-5">
						<Image
							source={{ uri: user?.avatar }}
							className="size-44 relative rounded-full"
						/>

						<Text className="text-2xl font-rubik-bold mt-2">{user?.name}</Text>
					</View>
				</View>

				<View className="flex flex-col mt-5 border-t pt-5 border-gray-200">
					<SettingsItem icon="person-outline" title="Profile" color="#ccae88" />
					<SettingsItem
						icon="heart-outline"
						title="Favorites"
						color="#a67b5b"
					/>
					<SettingsItem icon="create-outline" title="Reviews" color="#8a624a" />
					<SettingsItem
						icon="people-outline"
						title="Invite Friends"
						color="#765640"
					/>
				</View>

				<View className="flex flex-col border-t mt-5 pt-5 border-gray-200">
					<SettingsItem
						icon="exit-outline"
						title="Logout"
						color="#b18f6a"
						onPress={handleLogout}
					/>
				</View>
			</ScrollView>
			<TouchableOpacity
				className="absolute top-12 left-6 opacity-55"
				onPress={() => router.back()}
			>
				<Ionicons name="arrow-back" size={32} />
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Profile;
