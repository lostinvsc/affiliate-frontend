import React, { useState, useEffect, useRef, useContext } from 'react'
import Footer from './Footer.jsx'
import Item from '../Cards/Item.jsx'
import '../Css/Gender.css'
import Context from '../Context/Context.js';
const Men = () => {

    const value = useContext(Context)
    
    const [all_product, setAll_product] = useState([])

    const allp = () => {
        if (value.list.length > 0) {
            let all = value.list.filter((e) => e.category == "men")
            setAll_product(all)
        }
    }

    const change=(change)=>{
        let allp = value.list.filter((e) => e.category == "men")

       let newp=allp.filter((e)=>e.name.toUpperCase().includes(change.toUpperCase()) )
        setAll_product(newp)
        
    }

    useEffect(() => {
        allp();
    }, [value.list])


    return (
        <div id='ghead' className=' mx-auto flex flex-col items-center '>
            <img id='banner' className='w-[100%] menbanner' src="/menbanner.jpg" alt="" />

            <div id="search" className="flex border gap-0 rounded-full border-black search h-[30px] mb-[5vw] mt-[3vw] items-center pl-[5px]">
                <img src="search.svg" className='h-[80%] mt-[3px]' alt="" />
                <input onChange={(e) => { if(e.target.value){change(e.target.value)}else{allp()} }} type="text" className=' rounded-r-full outline-none text-[2rem] pl-[10px] w-[100%] h-full font-light' placeholder='Search' />
            </div>

            <div id='gproducts' className="main flex flex-wrap w-[100%] mx-auto justify-between mt-[4vw] mb-[100px] ">
                {
                    all_product.length > 0 &&
                    all_product.map((value, index) => {
                        if (value.category == "men") {

                            return (
                                <Item key={index} value={value} />
                            )
                        }
                    })

                }
            </div>
            <Footer />
        </div>
    )
}

export default Men