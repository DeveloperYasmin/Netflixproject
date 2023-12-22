import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {movieResults, movieNames}=useSelector((store)=>store?.gpt)

  if(!movieNames) return null
  return (
    <div className='bg-black mt-10 text-white bg-opacity-90'>
     <div>
      {movieNames?.map((movieName, index)=>(
        <MovieList key={movieName} title={movieName} movies={movieResults[index]}
        />
      ))}
      </div>     
      </div>
  )
}

export default GptMovieSuggestions