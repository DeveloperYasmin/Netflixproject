import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from '../utils/constants'
import { addnowplayingmovies } from '../utils/movieSlice'
import { useEffect } from "react"


const useNowPlaying=()=>{
    const dispatch=useDispatch()
    const nowplayingmovies=useSelector(store=>store.movies.nowplayingmovies)
  const getnowplaying=async() =>{
    const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
    const json=await data?.json()
    dispatch(addnowplayingmovies(json?.results))
  }

  useEffect(()=>{
    if(!nowplayingmovies)
    getnowplaying();
  },[])
}
export default useNowPlaying