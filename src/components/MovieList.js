import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';

const MovieList = ({title,movies}) => 
{
console.log(movies)
return(
  <div className=' pt-6 pl-6  '>
    <h1 className='font-bold text-2xl text-white pb-4'>{title}</h1>
    <div className='flex overflow-x-scroll'>
      
      <div className='flex'>
        {movies && movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
      </div>
    </div>
  </div>
)}
    

export default MovieList