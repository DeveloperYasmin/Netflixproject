import React, { useRef } from 'react'
import lang from '../utils/languageconstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GptSearchBar = () => {
  const langkey =useSelector(store=>store.config.lang)
  const searchtext=useRef(null)
  const handleGptSearchClick= async() =>{
    console.log(searchtext.current.value)

    const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query"+searchtext.current.value+
    "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay,Friends,Never have I ever,Gilli"
    const gptResults=await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchtext.current.value}],
      model: 'gpt-3.5-turbo',

    });
    
    console.log(gptResults.choices?.[0]?.message?.content)
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")}
  
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className=' w-1/2  bg-stone-800 hover:bg-stone-700 cursor-pointer pl-5 grid grid-cols-12 rounded-full'
        onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} type="text" className='p-4 pl-10 m-5 col-span-9 rounded-full' 
            placeholder={lang[langkey].gptSearchPlaceholder}
            />
            <button className=' bg-red-600 hover:bg-red-900 cursor-pointer rounded-xl col-span-3 ml-4 m-6 text-white font-semibold text-xl py-2 px-4'
            onClick={handleGptSearchClick}>
                {lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar