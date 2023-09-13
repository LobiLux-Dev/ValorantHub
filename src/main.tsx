import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ValorantHubApp } from './ValorantHubApp'

import './styles.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ValorantHubApp />
	</StrictMode>
)
