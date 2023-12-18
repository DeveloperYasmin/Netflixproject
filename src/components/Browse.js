import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import useTopRated from '../hooks/useTopRated';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcoming from '../hooks/useUpcoming'

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse