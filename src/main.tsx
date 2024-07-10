import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'
import { ThemeProvider } from './components/ThemeProvider/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
    <Toaster position="top-center" />
  </React.StrictMode>,
)
