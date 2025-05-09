import { Ice, Milk, Size, Sweetness, Toppings } from '@/lib/appwrite';

export const sizeOptions: { label: string; value: Size }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'Regular', value: 'regular' },
	{ label: 'Large', value: 'large' },
];
export const sweetLevels: { label: string; value: Sweetness }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'No Sugar', value: 'no sugar' },
	{ label: 'Little Sugar', value: 'little sugar' },
	{ label: 'Half Sugar', value: 'half sugar' },
	{ label: 'Less Sugar', value: 'less sugar' },
	{ label: 'Full Sugar', value: 'full sugar' },
	{ label: 'Extra Sugar', value: 'extra sugar' },
];
export const iceLevels: { label: string; value: Ice }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'Hot', value: 'hot' },
	{ label: 'No Ice', value: 'none' },
	{ label: 'Little Ice', value: 'little ice' },
	{ label: 'Half Ice', value: 'half ice' },
	{ label: 'Less Ice', value: 'less ice' },
	{ label: 'Full Ice', value: 'full ice' },
];
export const milkChoices: { label: string; value: Milk }[] = [
	{ label: 'Default', value: 'default' },
	{ label: 'None', value: 'none' },
	{ label: '2% Milk', value: '2%' },
	{ label: 'Almond Milk', value: 'almond' },
	{ label: 'Fresh Milk', value: 'fresh' },
	{ label: 'Half & half', value: 'half&half' },
	{ label: 'Heavy Cream', value: 'cream' },
	{ label: 'Lactose Free', value: 'lactose-free' },
	{ label: 'Oat Milk', value: 'oat' },
	{ label: 'Soy Milk', value: 'soy' },
	{ label: 'Whole Milk', value: 'whole' },
];
export const toppingOptions: { label: string; value: Toppings }[] = [
	{ label: 'Agar/Crystal Boba', value: 'crystal-boba' },
	{ label: 'Aloe Vera', value: 'aloe' },
	{ label: 'Brown Sugar Boba', value: 'brown-sugar-boba' },
	{ label: 'Cheese Foam', value: 'cheese-foam' },
	{ label: 'Grass Jelly', value: 'grass-jelly' },
	{ label: 'Honey Boba', value: 'honey-boba' },
	{ label: 'Lychee Jelly', value: 'lychee-jelly' },
	{ label: 'Pudding', value: 'pudding' },
	{ label: 'Strawberry Popping Boba', value: 'strawberry-popping-boba' },
	{ label: 'Taro', value: 'taro' },
	{ label: 'Other', value: 'other' },
];
