import {
	Account,
	Avatars,
	Client,
	Databases,
	OAuthProvider,
	Query,
	Storage,
} from 'react-native-appwrite';
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
	databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
	storesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_STORES_COLLECTION_ID,
	drinksCollectionId: process.env.EXPO_PUBLIC_APPWRITE_DRINKS_COLLECTION_ID,
	reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
};

export const client = new Client();

client
	.setEndpoint(config.endpoint!)
	.setProject(config.projectId!)
	.setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

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

export async function getStores({
	filter,
	query,
	limit,
}: {
	filter?: string;
	query?: string;
	limit?: number;
}) {
	try {
		const buildQuery = [Query.orderAsc('name')];

		if (filter && filter !== 'All')
			buildQuery.push(Query.equal('type', filter));

		if (query) buildQuery.push(Query.or([Query.search('name', query)]));

		if (limit) buildQuery.push(Query.limit(limit));

		const result = await databases.listDocuments(
			config.databaseId!,
			config.storesCollectionId!,
			buildQuery
		);

		return result.documents;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getStoreById({ id }: { id: string }) {
	try {
		const result = await databases.getDocument(
			config.databaseId!,
			config.storesCollectionId!,
			id
		);
		return result;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getDrinkById({ id }: { id: string }) {
	try {
		const result = await databases.getDocument(
			config.databaseId!,
			config.drinksCollectionId!,
			id
		);
		return result;
	} catch (error) {
		console.error(error);
		return null;
	}
}
