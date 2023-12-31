import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from '../utils/constants'
import { addtrailervideo } from '../utils/movieSlice'
import { useEffect } from "react"


const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch()
    const trailervideo=useSelector(store=>store.movies.trailervideo)
    const getmovievideo=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/"
      + movieId +
      "/videos?language=en-US", API_OPTIONS)
     const json=await data?.json()
    
    const filterdata=json?.results?.filter((video) =>video.type === "Trailer");
    const trailer =filterdata.length? filterdata[0] : json.results[0];
    dispatch(addtrailervideo(trailer))
    }  
  
    useEffect(()=>{
    if(!trailervideo)
      getmovievideo()
    },[])
}

export default useMovieTrailer