import React, { useRef, useState } from 'react'
import Header from "./Header"
import {checkvalidatedata} from '../utils/validate'
const Login = () => {
  const [IsSignInForm,setIsSignInForm]=useState(true)
  
  const[errormessage,seterrormessage]=useState(null)
  
  const Email=useRef(null)
  const Password=useRef(null)

  const handlebtnclick=()=>{

   const message=checkvalidatedata(Email.current.value,Password.current.value)
   seterrormessage(message)

  }
  const toggleSignUpForm=()=>
  {
      setIsSignInForm(!IsSignInForm)
  }
  return (
    <div>
           <Header/>
           <div className='absolute'>
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bg"/>

           </div>
      
      <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black w-2/6 p-10 mx-auto h-[650px] right-0 left-0 my-20 bg-opacity-90'>
       <h1 className='text-3xl font-semibold text-white m-12'>{IsSignInForm?"Sign In":"Sign Up"}</h1>
       {!IsSignInForm &&  
       <input className="p-3 pl-5  text-white pr-20 m-10 flex  rounded-md  bg-stone-600 " type="text" placeholder="Full Name"/>}
        <input ref={Email} className="p-3 pl-5  text-white pr-20 m-10 flex  rounded-md  bg-stone-600 " type="text" placeholder='Email or phone number'/>
        
        <input ref={Password} className="p-3 pl-5 text-white  pr-20 m-10 flex rounded-md bg-stone-600" type="text" placeholder='Password'/>
        <p className='m-10 text-xl font-serif text-red-600'>{errormessage}</p>
        <button className='rounded-md  w-40 p-2 text-xl bg-red-600 text-white m-4 ml-24'
        onClick={handlebtnclick}
        >
          {IsSignInForm?"Sign In":"Sign Up"}</button>
        
        <div className='text-lg text-stone-400 pl-10 mt-10 flex'>{IsSignInForm?"New to Netflix?":"Already a user"}
        <p className='text-white pl-1 hover:cursor-pointer underline' onClick={toggleSignUpForm}>
          {IsSignInForm?"Sign up now":"Sign In now"}</p>
        </div>

      </form>
      </div>
  )
}

export default Login