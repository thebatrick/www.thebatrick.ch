/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				light: "#f5f5f5",
				dark: "#1b1b1b",
				deeppink: "#ff1493",
			}
		},
	},
	plugins: [],
}
