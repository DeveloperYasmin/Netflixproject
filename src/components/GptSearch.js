import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL} from '../utils/constants'

const GptSearch = () => {
  return (
    <>
       <div className='absolute -z-10'>
           <img className='h-screen w-screen  object-cover' src={BG_URL} alt="bg"/>
        </div>
        <div>
   <GptSearchBar/>
   <GptMovieSuggestions/>
   </div>
    </>
  )
}

export default GptSearch