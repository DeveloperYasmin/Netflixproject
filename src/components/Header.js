import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userslice'
import { DROP_DOWN_ICON, DROP_UP_ICON, LOGO_URL, SUPPORTED_LANGUAGE } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changelanguage } from '../utils/configSlice'

const BodyHeader = () => {

  const [isclick,setisclick]=useState(true)

  const dispatch=useDispatch()
  const navigate=useNavigate()
    const user=useSelector((store)=>store.user)
 const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
    const toggledropdown=()=>{
       
       setisclick(!isclick)
    }
    const handlesignout=()=>{
      signOut(auth).then(() => {
      }).catch((error) => {
        navigate("/error")
      });
      
    }
    useEffect(()=>{

     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(adduser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
          navigate("/Browse")
          // ...
        } else {
         
          dispatch(removeuser())
          navigate("/")
        }
      });

      
      return ()=> unsubscribe()
    },[])
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView())
    }

    const handlelanguageChange=(e)=>{
     dispatch(changelanguage(e.target.value))
    }
  return (
    <div>
    <div className='absolute z-30 w-full items-center justify-between flex  bg-gradient-to-b from-black bg-opacity-50  flex-col md:flex-row'>
    
    <img className='w-52 mx-auto md:mx-0'
        src={LOGO_URL} alt="logo"/>
       
    {user && <div className='flex mr-12'>
     { showGptSearch && <select className='hover:bg-zinc-900 cursor-pointer bg-gray-700 rounded-lg p-2 font-semibold text-lg bg-opacity-70 text-white'
       onChange={handlelanguageChange}>

        {SUPPORTED_LANGUAGE.map(lang=>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
       
      </select>}
      <button className='hover:bg-red-900 w-3/6 cursor-pointer bg-red-600 ml-5 text-lg font-semibold rounded-lg p-2 text-white'
      onClick={handleGptSearchClick}>
        {showGptSearch?"Home":"GPT Search"}</button>
      <img className="hidden md:inline-block w-10 ml-5 mr-3 h-10 rounded-md" src={user?.photoURL}/>
      <button className='hidden md:inline-block' onClick={toggledropdown}>
             {isclick?
             <img  className="w-5" src={DROP_DOWN_ICON}/>:
             <img className='w-5' src={DROP_UP_ICON}/>}
      </button>
      <button className="md:hidden ml-20 hover:cursor-pointer hover:underline text-white" onClick={handlesignout}>SignOut</button>

      </div>}
    
       {!isclick && <div className=' absolute font-semibold rounded-lg ml-[1160px] mt-44 p-3 w-44 m-2  text-white bg-gray-800 bg-opacity-70'>
            
       <h1 className='text-lg'> {user?.displayName}</h1>
      <span>_______________________</span>
            <button className="hover:cursor-pointer hover:underline " onClick={handlesignout}>SignOut</button>
        </div>}
    </div>
    </div>
  )
}

export default BodyHeader