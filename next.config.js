/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [{ hostname: 'media.valorant-api.com' }],
	},
}

module.exports = nextConfig
