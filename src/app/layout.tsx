import { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
	title: 'Valorant Hub',
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
