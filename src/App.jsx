import React from 'react'
import Context from './Context/Context'
import Navbar from './Components/Navbar'
import { useState,useEffect,useRef } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Male from './Components/Men.jsx'
import Female from './Components/Women.jsx'
import Tech from './Components/Tech.jsx'
import Shop from './Components/Shop.jsx'
import Accessories from './Components/Accessories.jsx'

import axios, { all } from 'axios';

const App = () => {
  const router=createBrowserRouter([
    {
path:'/male',
element:<>  <Navbar/><Male/></>
    },
    {
path:'/female',
element:<>  <Navbar/><Female/></>
    },
    {
path:'/tech',
element:<>  <Navbar/><Tech/></>
    },
    {
path:'/accessories',
element:<>  <Navbar/><Accessories/></>
    },
    {
path:'/',
element:<>  <Navbar/><Shop/></>
    },


  ])


  const [list, setList] = useState([]);
  

  const getlist = async () => {
      let res = await axios.get('https://affiliate-back-x12u.onrender.com/getlist')
      setList(res.data)
  }

  useEffect(() => {
    getlist()
  }, [])
  
  

  return (

 <Context.Provider value={{list}} >

        <RouterProvider router={router} />
        
 </Context.Provider>

  )
}

export default App