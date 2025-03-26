import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>,
)
