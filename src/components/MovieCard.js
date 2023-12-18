import React from 'react'
import  {IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='p-3'>
        <img className='rounded-lg ' alt="moviecard" src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard