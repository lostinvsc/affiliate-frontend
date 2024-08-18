import React, { useState, useEffect, useRef, useContext } from 'react'
import Footer from './Footer.jsx'
import Item from '../Cards/Item.jsx'
import '../Css/Gender.css'
import Context from '../Context/Context.js';
const Women = () => {
    const value=useContext(Context)
    const [list, setList] = useState([]);
    const [all_product, setAll_product] = useState([])

    const getlist = async () => {
        setList(value.list)
    }

    useEffect(() => {
        getlist()
    },[value.list])

    const allp = () => {
        if (list.length > 0) {
            let all = list.filter((e) => e.category == "women")
            setAll_product(all)
        }
    }

    const change=(change)=>{
        let allp = list.filter((e) => e.category == "women")

       let newp=allp.filter((e)=>e.name.toUpperCase().includes(change.toUpperCase()) )
        setAll_product(newp)
        
    }

    useEffect(() => {
        allp();
    }, [list])


  return (
    <div id='ghead' className=' mx-auto flex flex-col items-center '>
    <img id='banner' className='w-[100%] ' src="/banner.jpg" alt="" />

    <div id="search" className="flex border gap-0 rounded-full border-black search h-[30px] mb-[5vw] mt-[3vw] items-center pl-[5px]">
                <img src="search.svg" className='h-[80%] mt-[3px]' alt="" />
                <input onChange={(e) => { if(e.target.value){change(e.target.value)}else{allp()} }} type="text" className=' rounded-r-full outline-none text-[2rem] pl-[10px] w-[100%] h-full font-light' placeholder='Search' />
            </div>

    <div id='gproducts' className="main flex flex-wrap w-[100%] mx-auto justify-between mt-[4vw] mb-[100px] ">
        {
            all_product.map((value, index) => {
                if (value.category == "women") {

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

export default Women