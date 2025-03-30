import {
	Alert,
	Button,
	Image,
	ImageBackground,
	ScrollView,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { login } from '@/lib/appwrite';

import Ionicons from '@expo/vector-icons/Ionicons';
import images from '@/constants/images';

const Auth = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = async () => {
		const result = await login();
		if (result) {
			//   refetch();
		} else {
			Alert.alert('Error', 'Failed to login');
		}
	};

	return (
		<SafeAreaView className="flex-1 overflow-hidden">
			<ImageBackground
				source={images.bobaBackground}
				className="object-cover flex-1"
			>
				<View className="justify-center flex-1 bg-opacity-70 bg-white">
					<Text className="text-2xl mx-auto font-sourGummy">Sign In</Text>
					<View className="bg-orange-100 mt-2 mx-auto p-4 w-fit md:w-1/4 space-y-2 rounded-md">
						<Text className="font-semibold">Username</Text>
						<TextInput
							placeholder="ex. someone@email.com"
							onChangeText={setUsername}
							value={userName}
							className="p-2 placeholder-gray-500"
						/>
						<Text className="font-semibold">Password</Text>
						<TextInput
							onChangeText={setPassword}
							value={password}
							placeholder="Password"
							secureTextEntry={!showPassword}
							className="p-2 placeholder-gray-500"
						/>

						<Button
							//   onPress={onPressLearnMore}
							title="Submit"
							color="#b18f6a"
							accessibilityLabel="Learn more about this purple button"
						/>
					</View>

					<TouchableOpacity
						onPress={handleLogin}
						className="bg-white shadow-md shadow-zinc-300 rounded-lg w-fit py-2 px-4 mt-5 mx-auto flex"
					>
						<View className="flex flex-row items-center justify-center">
							<Image
								source={images.googleLogo}
								style={{
									width: 24,
									height: 24,
								}}
								resizeMode="contain"
							/>
							<Text className="text-lg font-rubik-medium text-black-300 ml-4">
								Continue with Google
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default Auth;
