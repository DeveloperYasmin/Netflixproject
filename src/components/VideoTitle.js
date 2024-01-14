import React from 'react'
import {MORE_INFO, PLAY_INFO} from '../utils/constants'


const VideoTitle = ({title,overview}) => {
  return (
  
<div className='w-full aspect-video absolute z-20 md:pt-36 pt-5 px-6 md:px-24  text-white bg-gradient-to-r from-black'>
   <h1 className=' text-xl md:text-6xl font-bold'>{title}</h1>
   <p className='hidden md:inline-block font-serif text-md w-1/3 py-6'>{overview}</p>
    
   <div className='flex md:text-xl text-md font-semibold pt-5 md:pt-0 '>
     <div className='flex bg-white text-black hover:bg-zinc-200 rounded-md shadow-xl p-2 m-1'>
        <img className='w-5 mr-3' src={PLAY_INFO}/>
         <button className='flex mr-5 '>Play</button>
      </div>
     <div className='flex bg-gray-400 bg-opacity-50 hover:bg-zinc-400 shadow-xl rounded-md p-2 m-1  '>
       <img className='w-5 mr-3 ' src={MORE_INFO}/>
        <button className='flex'>More Info</button>
      </div>
     </div>
</div>



  )
}

export default VideoTitle