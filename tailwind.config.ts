import type { Config } from 'tailwindcss'

import DaisyUI from 'daisyui'

const config: Config = {
	content: ['./src/pages/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}', './src/app/**/*.{ts,tsx,mdx}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#ff3d43',
					secondary: '#c1c1c4',
					accent: '#27272f',
					neutral: '#8e8e93',
					'base-100': '#32333d',
					info: '#3498db',
					success: '#27ae60',
					warning: '#f39c12',
					error: '#e74c3c',
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [DaisyUI],
}

export default config
