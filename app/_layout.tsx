import { useEffect } from 'react';

import { Stack } from 'expo-router';
import './globals.css';
import { useFonts } from 'expo-font';
import GlobalProvider from '@/lib/global-provider';

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		'SourGummy-Bold': require('../assets/fonts/SourGummy-Bold.ttf'),
		'SourGummy-ExtraBold': require('../assets/fonts/SourGummy-ExtraBold.ttf'),
		'SourGummy-Light': require('../assets/fonts/SourGummy-Light.ttf'),
		'SourGummy-Medium': require('../assets/fonts/SourGummy-Medium.ttf'),
		'SourGummy-Regular': require('../assets/fonts/SourGummy-Regular.ttf'),
		'SourGummy-SemiBold': require('../assets/fonts/SourGummy-SemiBold.ttf'),
	});

	return (
		<GlobalProvider>
			<Stack screenOptions={{ headerShown: false }} />
		</GlobalProvider>
	);
}
