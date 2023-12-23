import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from '../utils/constants'
import { addtoprated } from '../utils/movieSlice'
import { useEffect } from "react"


const useTopRated=()=>{
    const dispatch=useDispatch()
 const toprated=useSelector(store=>store.movies.toprated)
  const gettoprated=async() =>{
    const data= await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS)
    const json=await data?.json()
    dispatch(addtoprated(json?.results))
  }

  useEffect(()=>{
    if(!toprated)
    gettoprated();
  },[])
}
export default useTopRated