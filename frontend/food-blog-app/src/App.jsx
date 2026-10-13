import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainNavigation from './components/MainNavigaton'
import axios from 'axios';


const router = createBrowserRouter([
  {path : '/' ,element : <MainNavigation></MainNavigation>, children : [
      {path : '/', element : <Home />}
  ]}
])


function App() {
return(<>
    <RouterProvider router = {router}></RouterProvider>
</>)
}

export default App
