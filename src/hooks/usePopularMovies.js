import { useDispatch } from "react-redux"
import { API_OPTIONS } from '../utils/constants'
import { addpopularmovies } from '../utils/movieSlice'
import { useEffect } from "react"


const usePopularMovies=()=>{
    const dispatch=useDispatch()
    const popularmovies=useSelector(store=>store.movies.popularmovies)

  const getpopular=async() =>{
    const data= await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
    const json=await data?.json()
    dispatch(addpopularmovies(json?.results))
  }

  useEffect(()=>{
    if(!popularmovies)
    getpopular();
  },[])
}
export default usePopularMovies