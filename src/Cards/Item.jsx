import React, { useRef } from 'react'
import '../Css/Item.css'
const Item = ({ value }) => {
    const ref = useRef();

    return (
        <a id='item' target='_blank' ref={ref} href={value.link} className='w-[24rem] border border-black p-[10px] rounded-lg cursor-pointer text-[1.3rem] hover:scale-[1.05] transition-scale duration-300 mb-[30px]'>
            <div className="w-full image">
                <img className='w-[100%] rounded-md' src={value.image} alt="" />
            </div>
            <p className='my-[10px]'>
                {value.name}
            </p>

            <div className="price flex gap-[10px]">
                <span className="new">
                ₹{value.new_price}
                </span>
               
            </div>
            
        </a>
    )
}

export default Item