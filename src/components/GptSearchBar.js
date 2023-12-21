import React, { useRef } from 'react'
import lang from '../utils/languageconstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const langkey =useSelector(store=>store.config.lang)
  const searchtext=useRef(null)

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +
    '&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const json=await data.json()
    return json.results
  }
  const handleGptSearchClick= async() =>{
    console.log(searchtext.current.value)

    const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query :"+ searchtext.current.value +
    ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar,Sholay,Friends,Never have I ever,Gilli"
    const gptResults=await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){}
    console.log(gptResults.choices?.[0]?.message?.content)
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")
    const promiseArray=gptMovies.map((movie) => searchMovieTMDB(movie))
    const TMDBResults=await Promise.all(promiseArray)
    console.log(TMDBResults)
    dispatch(addGptMovieResults({moviesNames: gptMovies,movieResults: TMDBResults}))
  }
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className=' w-1/2  bg-stone-800 hover:bg-stone-700 cursor-pointer pl-5 grid grid-cols-12 rounded-full'
        onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} type="text" className='p-4 pl-10 m-5 col-span-9 rounded-full' 
            placeholder={lang[langkey].gptSearchPlaceholder}/>
            <button className=' bg-red-600 hover:bg-red-900 cursor-pointer rounded-xl col-span-3 ml-4 m-6 text-white font-semibold text-xl py-2 px-4'
            onClick={handleGptSearchClick}>
                {lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar