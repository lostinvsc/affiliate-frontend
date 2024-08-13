import React,{useEffect,useRef, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../Css/Footer.css'
const Footer = () => {
    const ref=useRef();
    const navigate=useNavigate();
    const toHome=()=>{
        navigate('/')
        window.scrollTo(0,0)
    }
    return (
        <div id='footh' className='w-[100vw] flex flex-col items-center gap-[30px] '>
            <a id='icon' ref={ref} onClick={toHome}  className='flex items-center justify-center cursor-pointer '>
                <img src="../../public/Frontend_Assets/logo_big.png" alt="" />
                <h1 className='text-[3.6rem] font-semibold'>SHOPPER</h1>
            </a>
            <div id='cpoac' className=''>
                <ul className='flex justify-between w-[100%] text-[1.5rem]  text-gray-600 '>
                    <Link to='/'  onClick={()=>{window.scrollTo(0,0)}} className='cursor-pointer'>Home</Link>
                    <Link to='/tech' onClick={()=>{window.scrollTo(0,0)}} className='cursor-pointer'>Tech</Link>
                    <Link to='/accessories' onClick={()=>{window.scrollTo(0,0)}} className='cursor-pointer'>Accessories</Link>
                    <Link to='/male' onClick={()=>{window.scrollTo(0,0)}} className='cursor-pointer'>Male</Link>
                    <Link to='/female' onClick={()=>{window.scrollTo(0,0)}} className='cursor-pointer'>Female</Link>
            
                </ul>
            </div>

            <div className='w-[100%] '>
                <ul id='sm' className='flex justify-center gap-[50px] w-[50%] mx-auto text-[1.5rem] text-gray-600 '>
                    <li><img className='w-[23px]' src="../Frontend_Assets/instagram_icon.png" alt="" /></li>
                    <li><img className='w-[23px]' src="../Frontend_Assets/pintester_icon.png" alt="" /></li>                  
                </ul>
            </div>
           
            <footer className='border-t-[2px] w-[100%]  text-center py-[20px] text-[1.2rem]'>
                Copyright &copy; 2024 - All Rights Reserved
            </footer>

        </div>
    )
}

export default Footer