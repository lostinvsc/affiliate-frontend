import React from 'react'
import Context from '../Context/Context.js'
import { useContext, useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../Css/Navbar.css'
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    let value = useContext(Context)
    let navigate = useNavigate();
  
    const [dropdown, setDropdown] = useState(false)

    let ref = useRef()

    const getlist = async () => {
        let res = await axios.get('https://affiliate-back-x12u.onrender.com/getlist')
        value.setList(res.data)
    }

    function changedd() {
        if (dropdown == false) {
            setDropdown(true)
        } else if (dropdown == true) {
            setDropdown(false)
        }
    }

    useEffect(() => {
      getlist()
    }, [])
    
    return (
        <nav id='navbar' className=' relative flex justify-between items-center py-[1rem] border pl-[5vw] pr-[10vw]'>
            <div id='shopper' onClick={()=>{navigate('/')}} className='flex items-center cursor-pointer '>
                <img className='w-[5rem]' src="../Frontend_Assets/logo.png" alt="" />
                <h2 className='text-[3rem]'>SHOPPER</h2>
            </div>
            <div className='unshow'>
                <ul className='flex items-center gap-[4rem] text-[1.5rem] font-light font-sans'>

                    <NavLink className={(e) => { return e.isActive ? 'underline decoration-4 underline-offset-8 decoration-red-500 list-none' : 'list-none hover:text-orange-400' }} to="/" >Home</NavLink>
                    <NavLink className={(e) => { return e.isActive ? 'underline decoration-4 underline-offset-8 decoration-red-500' : 'hover:text-orange-400' }} to="/tech">Tech Items</NavLink>
                    <NavLink className={(e) => { return e.isActive ? 'underline decoration-4 underline-offset-8 decoration-red-500' : 'hover:text-orange-400' }} to="/accessories">Accessories</NavLink>
                    <NavLink className={(e) => { return e.isActive ? 'underline decoration-4 underline-offset-8 decoration-red-500' : 'hover:text-orange-400' }} to="/male">Male</NavLink>
                    <NavLink className={(e) => { return e.isActive ? 'underline decoration-4 underline-offset-8 decoration-red-500' : 'hover:text-orange-400' }} to="/female">Female</NavLink>
                </ul>
            </div>
           

            <div onClick={() => { setToggle(!toggle) }} className='show'>
                <button> {

                    !toggle ? <AiOutlineMenuFold className='menubtn' size={30} /> :
                        <AiOutlineMenuUnfold className='menubtn' size={30} />

                } </button>
            </div>

            {
                toggle &&
                <div id='dropmenu' className='absolute right-0 top-[61px]  w-[100vw] h-[95vh] bg-white  z-50 flex flex-col border border-white '>

                    <ul onClick={()=>{setToggle(false)}} className='flex text-black flex-col items-center gap-[1.9rem] text-[1.9rem] font-light font-sans py-[20px]'>

                        <NavLink className={(e) => { return e.isActive ? ' underline decoration-4 underline-offset-8 decoration-red-500  w-full text-end pr-[50px]' : ' w-full text-end pr-[50px]' }} to="/" >Home</NavLink>
                        <NavLink className={(e) => { return e.isActive ? ' underline decoration-4 underline-offset-8 decoration-red-500  w-full text-end pr-[50px]' : ' w-full text-end pr-[50px]' }} to="/tech">Tech Items</NavLink>
                        <NavLink className={(e) => { return e.isActive ? ' underline decoration-4 underline-offset-8 decoration-red-500  w-full text-end pr-[50px]' : ' w-full text-end pr-[50px]' }} to="/male">Male</NavLink>
                        <NavLink className={(e) => { return e.isActive ? ' underline decoration-4 underline-offset-8 decoration-red-500  w-full text-end pr-[50px]' : ' w-full text-end pr-[50px]' }} to="/female">Female</NavLink>
                        <NavLink className={(e) => { return e.isActive ? ' underline decoration-4 underline-offset-8 decoration-red-500  w-full text-end pr-[50px]' : ' w-full text-end pr-[50px]' }} to="/accessories">Accessories</NavLink>

                    </ul>

                </div>

            }

        </nav>
    )
}

export default Navbar