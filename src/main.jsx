import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Header from './Component/Header/Header.jsx'
import Home from './Component/Home/Home.jsx'
import AboutUs from './Component/AboutUs/AboutUs.jsx'
import OurFacilities from './Component/OurFacilities/OurFacilities.jsx'
import Gallery from './Component/Gallery/Gallery.jsx'
import ContactUs from './Component/ContactUs/ContactUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/> 
      <Route path='aboutus' element={<AboutUs />}/> 
      <Route path='ourfacilities' element={<OurFacilities />}/> 
      <Route path='gallery' element={<Gallery />}/> 
      <Route path='contactus' element={<ContactUs />}/> 


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
