import React from 'react'
import  {IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 p-2'>
        <img className='rounded-lg h-60' alt="moviecard" src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard