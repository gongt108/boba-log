import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';

export default function Index() {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<View className="flex-1 p-4">
			<Text>Did you get boba today?</Text>

			<Searchbar
				placeholder="Search"
				onChangeText={(query) => setSearchQuery(query)}
				value={searchQuery}
			/>

			<View>
				<View className="flex flex-row justify-between">
					<Text>Favorites</Text>
					<Text>See All</Text>
				</View>
				<View>
					<Text>Past Stores</Text>
					<Text>See All</Text>
				</View>
			</View>
		</View>
	);
}
