import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userslice'
import { LOGO_URL } from '../utils/constants'

const BodyHeader = () => {

  const [isclick,setisclick]=useState(true)

  const dispatch=useDispatch()
  const navigate=useNavigate()
    const user=useSelector((store)=>store.user)

    const toggledropdown=()=>{
       
       setisclick(!isclick)
    }
    const handlesignout=()=>{
      signOut(auth).then(() => {
      }).catch((error) => {
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
  return (
    <div>
    <div id="dropdownbtn" className='absolute z-10 w-full items-center justify-between flex  bg-gradient-to-b from-black'>
    
    <img className='w-52 ml-5'
        src={LOGO_URL} alt="logo"/>
    {user && <div>
      <img className="w-10 h-10 ml-[1000px] rounded-md" src={user?.photoURL}/>
      </div>}
    <button className='pl-3 mr-16' onClick={toggledropdown}>
             {isclick?"▼":"▲"}
        </button>
    </div>
       {!isclick && <div className='absolute font-semibold rounded-lg ml-[1120px] mt-20 p-3 w-44 m-2  text-white bg-gray-800 bg-opacity-70'>
            
       <h1 className='text-lg '> {user?.displayName}</h1>
      <label className=''>_______________________</label>
            <button onClick={handlesignout} 
            
            className='hover:underline cursor-pointer text-lg'>Sign out of Netflix</button>
      
        </div>}
    </div>

  )
}

export default BodyHeader