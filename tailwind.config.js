module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"header-gray": "#242526",
				"body-gray": "#18191a",
				"icon-gray": "#3a3b3c",
				"text-color": "#e4e6eb",
				"search-color": "#a7aaaf",
				"post-gray": "#242526",
				"header-icon-gray": "#b0b3b8",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
