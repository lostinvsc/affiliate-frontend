import React, { useState, useEffect, useRef } from 'react'
import Footer from './Footer.jsx'
import Item from '../Cards/Item.jsx'
import '../Css/Gender.css'
import axios from 'axios';

const Accessories = () => {
    const [list, setList] = useState([]);
    const [all_product, setAll_product] = useState([])

    const getlist = async () => {
        let res = await axios.get('http://localhost:3000/getlist')
        setList(res.data)
    }

    useEffect(() => {
        getlist()
    }, [])

    useEffect(() => {

        if (list.length > 0) {
            let all = list.filter((e) => e.tag[0] == "all")
            setAll_product(all)
        }

    }, [list])

    return (
        <div id='ghead' className=' mx-auto flex flex-col items-center '>
            <img id='banner' className='w-[100%] border' src="/accessories.png" alt="" />

          

            <div id='gproducts' className="main flex flex-wrap w-[100%] mx-auto justify-between mt-[4vw] mb-[100px] ">
                {
                    all_product.length>0 &&
                    all_product.map((value, index) => {
                        if (value.category == "accessories") {

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

export default Accessories