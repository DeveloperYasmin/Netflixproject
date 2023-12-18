import { useDispatch } from "react-redux"
import { API_OPTIONS } from '../utils/constants'
import { addnowplayingmovies } from '../utils/movieSlice'
import { useEffect } from "react"


const useNowPlaying=()=>{
    const dispatch=useDispatch()
  const getnowplaying=async() =>{
    const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
    const json=await data?.json()
    dispatch(addnowplayingmovies(json?.results))
  }

  useEffect(()=>{
    getnowplaying();
  },[])
}
export default useNowPlaying