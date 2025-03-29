import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

import { Routes } from './routes'

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
				<Routes />
		</StrictMode>,
	);
}