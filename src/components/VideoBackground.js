import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {
  const trailervideo=useSelector((store)=> store.movies?.trailervideo)
  useMovieTrailer(movieId)
  return (
    <div className="">
   <iframe className="w-full aspect-video  z-10"
   src={"https://www.youtube.com/embed/"+ trailervideo?.key + "?&autoplay=1&mute=1"}
   title="YouTube video player" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   >
   </iframe>
    </div>
  )
}

export default VideoBackground