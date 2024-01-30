import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Detail from './containers/Detail'
import Home from './containers/Home'
import Movies from './containers/Movies'
import Series from './containers/Series'
import Root from './router/root'
import GlobalStyle from './styles/globalStyle'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'filmes',
        element: <Movies />
      },
      {
        path: 'series',
        element: <Series />
      },
      {
        path: 'detalhe/:type/:id',
        element: <Detail />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
