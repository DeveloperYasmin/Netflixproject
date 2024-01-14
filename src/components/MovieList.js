import React from 'react'
import MovieCard from './MovieCard'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode,Pagination} from 'swiper/modules'

const MovieList = ({title,movies}) => {
  return (
    
    <div className='h-screen mb-64 sm:mb-16 -mt-[600px] md:-mt-64 '>
      <h1 className='font-bold text-2xl text-white p-2 pb-4'>{title}</h1>
      <Swiper
      breakpoints={{
        340:{
          slidesPerView:3,
        },
        700:{
          slidesPerView:7,
        }
      }}
      freeMode={true}
      pagination={{
        clickable:true
      }}
      modules={[FreeMode, Pagination]}
      className=' max-w-[100%] md:max-w-[100%]'
>
      {movies && movies?.map((movie) => 
      <SwiperSlide className='mb-8'>
      <MovieCard key={movie.id} posterPath={movie.poster_path} >
      <div className='shadow-lg text-white rounded-xl overflow-hidden cursor-pointer hover:opacity-50'></div> 
      </MovieCard>
      </SwiperSlide>

      )}
      
      
      
   
     
     </Swiper>

    </div>
  )
}

export default MovieList