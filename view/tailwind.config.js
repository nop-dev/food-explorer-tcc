/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Light colors
				light: {
					100: "#FFFFFF", // Light/Light 100
					200: "#FFFAF1", // Light/Light 200
					300: "#E1E1E6", // Light/Light 300
					400: "#C4C4CC", // Light/Light 400
					500: "#7C7C8A", // Light/Light 500
					600: "#76767F", // Light/Light 600
					700: "#4D585E", // Light/Light 700
				},
				// Dark colors
				dark: {
					100: "#000405", // Dark/Dark 100
					200: "#00070A", // Dark/Dark 200
					300: "#000204", // Dark/Dark 300
					400: "#000A0F", // Dark/Dark 400
					500: "#000C12", // Dark/Dark 500
					600: "#00111A", // Dark/Dark 600
					700: "#001119", // Dark/Dark 700
					800: "#0D161B", // Dark/Dark 800
					900: "#0D1D25", // Dark/Dark 900
					1000: "#192227", // Dark/Dark 1000
				},
				// Gradient colors
				gradient: {
					100: "#000A0F", // Gradiente/100
					200: "#759310", // Gradients/200
				},
				// Tomato colors
				tomato: {
					100: "#750310", // Tints/Tomato 100
					200: "#92000E", // Tints/Tomato 200
					300: "#AB222E", // Tints/Tomato 300
					400: "#AB4D55", // Tints/Tomato 400
				},
				// Other colors
				carrot: "#FBA94C", // Tints/Carrot 100
				mint: "#04D361", // Tints/Mint 100
				cake: {
					100: "#065E7C", // Tints/Cake 100
					200: "#82F3FF", // Tints/Cake 200
				},
				background: "#F6F5FC",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
