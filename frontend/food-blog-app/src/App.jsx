import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainNavigation from './components/MainNavigaton'
import axios from 'axios';


const getRecipes  = async () => {
  let allRecipes = [];
  try{
  await axios.get("http://localhost:3000/recipe/").then( res => {
    console.log(res.data);
    allRecipes = res.data;
  }
)
  }
  catch(err){
    console.log(err);
  }
  return allRecipes;
}

const router = createBrowserRouter([
  {path : '/' ,element : <MainNavigation></MainNavigation>, children : [
      {path : '/', element : <Home />, loader : getRecipes}
  ]}
])


function App() {
return(<>
    <RouterProvider router = {router}></RouterProvider>
</>)
}

export default App
