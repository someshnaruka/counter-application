import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";

function Card({onAdd,onSub,ondelete,_id,counter}) {
  return (
   <>
       <article className='flex flex-col items-center justify-between lg:w-1/4 md:w-1/2 w-full bg-white drop-shadow-lg rounded-lg h-48 p-4 m-4'>
   <h1 className='w-full text-center bg-slate-100 rounded-lg h-1/2 text-4xl flex items-center justify-center caret-transparent'>{counter}</h1>
   <p className='w-full flex justify-between items-center'>
    <button className='w-1/4 p-2 text-3xl bg-[#f5ba13] caret-transparent text-black rounded-md' onClick={()=>onSub(_id,counter)}>-</button>
    <AiOutlineDelete size={30} className='fill-[#f5ba13] cursor-pointer' onClick={()=>ondelete(_id)}></AiOutlineDelete>
    <button className='w-1/4 p-2 text-3xl bg-[#f5ba13] caret-transparent text-black rounded-md' onClick={()=>onAdd(_id,counter)}>+</button>
   </p>

   </article> 
   </>
  )
}

export default Card