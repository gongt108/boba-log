import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';

export const config = {
	platform: 'com.bobalog',
	endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
	projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
	db: 'prod',
	col: {
		reviews: '67eaa4f30039ec1fb67c',
	},
};

export const client = new Client();

client
	.setEndpoint(config.endpoint!)
	.setProject(config.projectId!)
	.setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
	try {
		//
		const redirectUri = Linking.createURL('/');

		const response = await account.createOAuth2Token(
			OAuthProvider.Google,
			redirectUri
		);

		if (!response) throw new Error('Failed to login');

		const browserResult = await openAuthSessionAsync(
			response.toString(),
			redirectUri
		);

		if (browserResult.type !== 'success')
			throw new Error('Create OAuth2 token failed');

		const url = new URL(browserResult.url);

		const secret = url.searchParams.get('secret')?.toString();
		const userId = url.searchParams.get('userId')?.toString();

		if (!secret || !userId) throw new Error('Failed to login');

		const session = await account.createSession(userId, secret);

		if (!session) throw new Error('Failed to create a session;');

		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export async function logout() {
	try {
		const result = await account.deleteSession('current');
		return result;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export async function getCurrentUser() {
	try {
		const result = await account.get();
		if (result.$id) {
			const userAvatar = avatar.getInitials(result.name);

			return {
				...result,
				avatar: userAvatar.toString(),
			};
		}

		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
}
