import React, { useState, useEffect, useRef, useContext } from 'react'
import Footer from './Footer.jsx'
import Item from '../Cards/Item.jsx'
import '../Css/Gender.css'
import Context from '../Context/Context.js';
const Men = () => {

    let value = useContext(Context)

    const [all_product, setAll_product] = useState([])

  

    useEffect(() => {
      
        if (value.list) {
            setAll_product(value.list)
       
        }
    }, [value])

    return (
        <div id='ghead' className=' mx-auto flex flex-col items-center '>
            <img id='banner' className='w-[100%] menbanner' src="/menbanner.jpg" alt="" />

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