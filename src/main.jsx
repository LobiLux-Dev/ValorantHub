import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ValorantHubApp from './ValorantHubApp.jsx'

import './styles.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ValorantHubApp />
	</StrictMode>
)
