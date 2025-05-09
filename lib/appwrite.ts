import {
	Account,
	Avatars,
	Client,
	Databases,
	ID,
	OAuthProvider,
	Permission,
	Query,
	Role,
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
	ordersCollectionId: process.env.EXPO_PUBLIC_APPWRITE_ORDERS_COLLECTION_ID,
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

// Order creation
export type Size = 'default' | 'regular' | 'large';

export type Sweetness =
	| 'default'
	| 'no sugar'
	| 'little sugar'
	| 'half sugar'
	| 'less sugar'
	| 'full sugar'
	| 'extra sugar';

export type Ice =
	| 'default'
	| 'none'
	| 'little ice'
	| 'half ice'
	| 'less ice'
	| 'full ice'
	| 'extra ice'
	| 'hot';

export type Milk =
	| 'default'
	| 'none'
	| '2%'
	| 'almond'
	| 'cream'
	| 'fresh'
	| 'half&half'
	| 'lactose-free'
	| 'oat'
	| 'soy'
	| 'whole';

export type Toppings =
	| 'aloe'
	| 'brown-sugar-boba'
	| 'cheese-foam'
	| 'crystal-boba'
	| 'grass-jelly'
	| 'honey-boba'
	| 'lychee-jelly'
	| 'pudding'
	| 'strawberry-popping-boba'
	| 'taro'
	| 'other';

export type CreateOrderParams = {
	drink?: string;
	size?: Size;
	sweetness?: Sweetness;
	ice?: Ice;
	milk?: Milk;
	other?: string;
	toppings?: Toppings[];
	topping?: [];
	reviews?: [];
};

// export async function createOrder(newOrder: CreateOrderParams) {
// 	try {
// 		const user = await getCurrentUser();
// 		if (!user || !user.$id) {
// 			throw new Error('User not authenticated');
// 		}

// 		const result = await databases.createDocument(
// 			config.databaseId!,
// 			'67ee3c2a0020ce5386c3',
// 			ID.unique(),
// 			newOrder
// 		);
// 	} catch (error) {
// 		console.error('Error creating order:', error);
// 		return null;
// 	}
// }

export async function getOrders() {
	try {
		const result = await databases.listDocuments(
			config.databaseId!,
			config.ordersCollectionId!,
			[Query.limit(100)]
		);

		return result.documents;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function createPosts(content) {
	try {
		const result = await databases.createDocument(
			config.databaseId!,
			'681afa76002d8010cc4f',
			ID.unique(),
			{ body: content }
		);
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function createOrder(newOrder: CreateOrderParams) {
	try {
		const result = await databases.createDocument(
			config.databaseId!,
			'681c30eb001f8647d5ff',
			ID.unique(),
			newOrder
		);

		return result;
	} catch (error) {
		console.error('Error creating order:', error);
		return null;
	}
}
