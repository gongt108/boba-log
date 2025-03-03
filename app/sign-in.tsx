import {
	Alert,
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

const backgroundImage = { uri: '' };

const Auth = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	return (
		<SafeAreaView className="flex-1 justify-center bg-">
			<ImageBackground source={images}>
				<Text className="text-2xl mx-auto">Sign In</Text>
				<View className="bg-slate-600 mx-auto p-2 w-1/2 md:w-1/4 space-y-2 rounded-md">
					<Text className="font-semibold">Username</Text>
					<TextInput
						placeholder="ex. someone@email.com"
						onChangeText={setUsername}
						value={userName}
					/>
					<Text className="font-semibold">Password</Text>
					<TextInput
						onChangeText={setPassword}
						value={password}
						placeholder="Password"
						secureTextEntry={!showPassword}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default Auth;
