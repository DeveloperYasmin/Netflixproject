import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userslice'
import { DROP_DOWN_ICON, DROP_UP_ICON, LOGO_URL } from '../utils/constants'

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
  return (
    <div>
    <div className='absolute z-30 w-full items-center justify-between flex  bg-gradient-to-b from-black'>
    
    <img className='w-52 ml-5'
        src={LOGO_URL} alt="logo"/>
    {user && <div>
      <img className="w-10 h-10 ml-[1000px] rounded-md" src={user?.photoURL}/>
      </div>}
    <button className='pl-3 mr-12' onClick={toggledropdown}>
             {isclick?
             <img  className="w-5" src={DROP_DOWN_ICON}/>:
             <img className='w-5' src={DROP_UP_ICON}/>}
      </button>
   
       {!isclick && <div className='absolute font-semibold rounded-lg ml-[1160px] mt-44 p-3 w-44 m-2  text-white bg-gray-800 bg-opacity-70'>
            
       <h1 className='text-lg'> {user?.displayName}</h1>
      <span>_______________________</span>
            <button className="hover:cursor-pointer hover:underline " onClick={handlesignout}>Sign out of Netflix</button>
        </div>}
    </div>
    </div>
  )
}

export default BodyHeader