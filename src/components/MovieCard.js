import React from 'react'
import  {IMG_CDN } from '../utils/constants'


const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='p-3 hover:pb-5 hover:cursor-pointer hover:shadow-lg hover:w-52 hover:z-10 hover:relative' >
   
     <div>   
        <img className='rounded-lg' alt="moviecard" src={IMG_CDN + posterPath}/>
    </div>
    </div>
  )
}

export default MovieCard