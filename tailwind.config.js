/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				sourGummy: ['SourGummy-Regular', 'sans-serif'],
				'sourGummy-bold': ['SourGummy-Bold', 'sans-serif'],
				'sourGummy-extrabold': ['SourGummy-ExtraBold', 'sans-serif'],
				'sourGummy-medium': ['SourGummy-Medium', 'sans-serif'],
				'sourGummy-semibold': ['SourGummy-SemiBold', 'sans-serif'],
				'sourGummy-light': ['SourGummy-Light', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
