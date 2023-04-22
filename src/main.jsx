import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles.css'
import { ValorantHubApp } from './ValorantHubApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ValorantHubApp />
  </StrictMode>
)
