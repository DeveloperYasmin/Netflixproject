import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BodyHeader = () => {

  const [isclick,setisclick]=useState(true)

  const navigate=useNavigate()
    const user=useSelector((store)=>store.user)

    const toggledropdown=()=>{
       
       setisclick(!isclick)
    }
    const handlesignout=()=>{
      signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        navigate("/Error")
      });
      
    }
  return (
    <div>
    <div id="dropdownbtn" className='absolute z-10 w-full items-center justify-between flex  bg-gradient-to-b from-black'>
    
    <img className='w-52 ml-5'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    {user && <div>
      <img className="w-10 h-10 ml-[1000px] rounded-md" src={user?.photoURL}/>
      </div>}
    <button className='pl-3 mr-20' onClick={toggledropdown}>
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