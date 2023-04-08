import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './routes'
import { ThemeProvider } from '@emotion/react'
import { LightTheme } from './shared/themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
          <BrowserRouter>
                 <AppRoutes />
          </BrowserRouter>
    </ThemeProvider>      
  </React.StrictMode>,
)
