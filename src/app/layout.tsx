import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import './globals.css'

export const metadata: Metadata = {
	title: 'Valorant Hub',
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html data-theme="dark" lang="en">
			<body>
				<header className="navbar bg-accent">
					<div className="flex-1">
						<Link className="btn btn-ghost normal-case text-primary text-xl" href="/">
							<Image alt="Logo" height={32} src="/favicon.ico" width={32} /> ValorantHub
						</Link>
					</div>
					<div>
						<ul>
							<li>
								<Link className="btn btn-ghost normal-case text-white text-xl" href="/agents">
									Agents
								</Link>
							</li>
						</ul>
					</div>
				</header>
				<main className="py-5">{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
