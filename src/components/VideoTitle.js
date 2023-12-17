import React from 'react'
import {MORE_INFO, PLAY_INFO} from '../utils/constants'


const VideoTitle = ({title,overview}) => {
  return (
  
<div className='w-full aspect-video absolute z-20 pt-48 px-24  text-white bg-gradient-to-r from-black'>
   <h1 className='text-4xl font-bold'>{title}</h1>
   <p className='font-serif text-lg w-1/3 py-6'>{overview}</p>
    
   <div className='flex text-xl font-semibold '>
     <div className='flex bg-white text-black hover:bg-zinc-200 rounded-md shadow-xl p-4 m-4'>
        <img className='w-6 mr-3 ' src={PLAY_INFO}/>
         <button className='flex mr-5 '>Play</button>
      </div>
     <div className='flex bg-gray-400 bg-opacity-50 hover:bg-zinc-400 shadow-xl rounded-md  p-4 m-4 '>
       <img className='w-7 mr-3 ' src={MORE_INFO}/>
        <button className='flex'>More Info</button>
      </div>
     </div>
</div>



  )
}

export default VideoTitle