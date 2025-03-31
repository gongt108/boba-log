import {
	Alert,
	Button,
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { login } from '@/lib/appwrite';
import { Redirect, router } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import images from '@/constants/images';
import { useGlobalContext } from '@/lib/global-provider';

const SignUp = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('none at this time.');

	const { refetch, loading, isLogged } = useGlobalContext();

	if (!loading && isLogged) return <Redirect href="/" />;

	const handleLogin = async () => {
		const result = await login();
		if (result) {
			refetch();
			console.log('Login Successful');
		} else {
			Alert.alert('Error', 'Failed to login');
		}
	};

	const validateEmail = (email) => {
		// Regular expression for validating an email address
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return regex.test(email); // Returns true if the email matches the regex
	};

	const submitNewUser = () => {
		if (!userName || !password || !passwordConfirmation) {
			setErrorMessage('Please complete all fields.');
			setShowError(true);
		} else if (!validateEmail(userName)) {
			setErrorMessage('Please enter a valid email address.');
			setShowError(true);
		} else if (password != passwordConfirmation) {
			setErrorMessage("Passwords don't match.");
			setShowError(true);
		} else {
			router.push('/');
		}
	};

	const dismissError = () => {
		console.log('tap');
		if (showError) {
			setShowError(false);
		}
	};

	return (
		<Pressable
			className="flex-1 overflow-hidden relative"
			onPress={dismissError}
		>
			<ImageBackground
				source={images.bobaBackground}
				style={{ height: '100%', width: '100%' }}
			>
				<View className="flex-1 bg-opacity-80 bg-white ">
					<View className="w-fit mx-auto my-auto h-fit">
						<Text className="text-2xl mx-auto font-sourGummy">Sign Up</Text>
						<View className="bg-orange-100 mt-2 mx-auto p-4 w-full md:w-1/4 space-y-2 rounded-md">
							<Text className="font-semibold">Email</Text>
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
							<Text className="font-semibold">Confirm Password</Text>
							<TextInput
								onChangeText={setPasswordConfirmation}
								value={passwordConfirmation}
								placeholder="Password"
								secureTextEntry={!showPassword}
								className="p-2 placeholder-gray-500"
							/>
							<Button
								onPress={submitNewUser}
								title="Submit"
								color="#b18f6a"
								accessibilityLabel="Learn more about this purple button"
							/>
						</View>
						<View className="flex flex-row mt-2 w-full justify-center">
							<Text className="text-lg">Have an account? </Text>
							<TouchableOpacity
								onPress={() => router.push(`/sign-in`)}
								className="underline text-blue-500"
							>
								<View>
									<Text className="text-lg text-blue-500 ml-2">
										Sign in here.
									</Text>
								</View>
							</TouchableOpacity>
						</View>
						<Text className="font-extrabold my-2 mx-auto text-lg">
							{' '}
							- OR -{' '}
						</Text>
						<TouchableOpacity
							onPress={handleLogin}
							className="bg-white shadow-md shadow-zinc-300 rounded-lg w-fit py-2 px-4 mt-2 mx-auto flex"
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
				</View>
				{showError && (
					<View className="absolute bg-white rounded-lg p-5 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-80">
						<Ionicons
							name="close"
							size={32}
							color="gray"
							className="justify-end flex"
						/>
						<Text className="font-sourGummy-bold text-center">Error</Text>
						<Text className="font-sourGummy-medium mt-2">{errorMessage}</Text>
					</View>
				)}
			</ImageBackground>
		</Pressable>
	);
};

export default SignUp;
