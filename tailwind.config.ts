import type { Config } from 'tailwindcss'

import DaisyUI from 'daisyui'

const config: Config = {
	content: ['./src/pages/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}', './src/app/**/*.{ts,tsx,mdx}'],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#FF3540',
					secondary: '#A0A0A5',
					accent: '#0D0D13',
					neutral: '#64646A',
					'base-100': '#1F1F29',
					info: '#3498db',
					success: '#43A047',
					warning: '#FFB300',
					error: '#E74C3C',
				},
				light: {
					primary: '#FF6572',
					secondary: '#D8D8DC',
					accent: '#1E1E24',
					neutral: '#A4A4AA',
					'base-100': '#FFFFFF',
					info: '#3498db',
					success: '#4CAF50',
					warning: '#FFC107',
					error: '#E74C3C',
				},
			},
		],
	},
	plugins: [DaisyUI],
	theme: {
		extend: {},
	},
}

export default config
