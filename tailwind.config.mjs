/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			"dark", "cupcake"
		],
		darkTheme: 'dark',
		lightTheme: 'cupcake',
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		logs: true,
		themeRoot: ":root"
	}
}
