import React, { useRef } from 'react'
import lang from '../utils/languageconstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { addGptMovieResults, clearMovieResults } from '../utils/gptSlice'
import useGPTSearch from '../hooks/useGPTSearch'

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const langkey =useSelector(store=>store.config.lang)
  const searchtext=useRef(null)
  const searchMovieTMDB=useGPTSearch()
  
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
    dispatch(addGptMovieResults({movieNames: gptMovies,movieResults: TMDBResults}))
  }
  const handleClearMovie=()=>{
    dispatch(clearMovieResults())
  }
  return (
    <div className='pt-[35%] md:pt-[8%] md:flex justify-center '>
        <form className='w-full md:w-1/2  bg-stone-800 hover:bg-stone-700 cursor-pointer grid grid-cols-12 rounded-full'
        onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} type="text" className='p-4 m-3 col-span-9 rounded-full' 
            placeholder={lang[langkey].gptSearchPlaceholder}/>
            <button className=' bg-red-600 hover:bg-red-900 cursor-pointer rounded-xl col-span-3 p-4 m-2 text-white font-semibold text-xl'
            onClick={handleGptSearchClick}>
                {lang[langkey].search}</button>
        </form>
        <button className=" text-white text-2xl shadow-lg bg-red-600 font-semibold p-2 m-5 rounded-lg baseline hover:bg-red-600 cursor-pointer"
                onClick={handleClearMovie}> Clear 🗑</button>
    </div>
  )
}

export default GptSearchBar