/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			"cupcake", 
			"myTheme",
			{
				myTheme: {
					"primary": "#953f5e",
					"secondary": "#00A17A",
					"accent": "#005F41",
					"neutral": "#404040",
					"base-100": "#303030",
				}
			}
		],
		darkTheme: ['class', '[data-theme="myTheme"'],
	}
}
