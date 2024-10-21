// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx'
import SearchPage from './components/SearchPage.jsx';
import AboutUs from './components/AboutUs.jsx';
import HomePage from './components/HomePage.jsx';
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      <Route path='' element={<HomePage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/search' element={<SearchPage/>} />
      <Route path='/about' element={<AboutUs/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
