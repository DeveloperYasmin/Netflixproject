import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store?.movies)
  return (
    <div className=' bg-zinc-800'>
      <div className='-mt-56 relative z-20'>
      
      <MovieList title={"Now Playing"} movies={movies?.nowplayingmovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies?.toprated}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularmovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer