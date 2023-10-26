import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Footer, Header, Main } from './components'

export const ValorantHubApp = () => {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</ChakraProvider>
	)
}
