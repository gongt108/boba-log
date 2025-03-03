import {
	Alert,
	Button,
	Image,
	ImageBackground,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '@/constants/images';

const Auth = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

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
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default Auth;
