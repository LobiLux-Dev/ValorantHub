import { BrowserRouter } from 'react-router-dom'

import { Footer, Header, Main } from './components'

export const ValorantHubApp = () => {
	return (
		<BrowserRouter>
			<Header />
			<Main />
			<Footer />
		</BrowserRouter>
	)
}
