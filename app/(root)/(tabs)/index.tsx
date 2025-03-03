import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Did you get boba today?</Text>
			<Button
				icon="camera"
				mode="contained"
				onPress={() => console.log('Pressed')}
			>
				Add My Order
			</Button>
			<Button mode="contained" onPress={() => console.log('Pressed')}>
				See Past Orders
			</Button>
		</View>
	);
}
