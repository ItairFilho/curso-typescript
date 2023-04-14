import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppThemeProvider } from './shared/contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <AppThemeProvider>
              <BrowserRouter>
                      <AppRoutes />
              </BrowserRouter>
       </AppThemeProvider>   
       </React.StrictMode>,
)
