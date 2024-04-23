import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Theme from './shared/contexts/Theme.tsx'

createRoot(document.getElementById('root')!).render(
  <Theme>
    <Router>
      <App />
    </Router>
  </Theme>
)
