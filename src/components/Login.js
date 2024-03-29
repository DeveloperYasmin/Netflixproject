import React, { useRef, useState } from 'react'
import Header from './Header';
import {checkvalidatedata} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userslice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [IsSignInForm,setIsSignInForm]=useState(true)
  
  const[errormessage,seterrormessage]=useState(null)
 
  const dispatch=useDispatch()
  
  const Name=useRef(null)
  const Email=useRef(null)
  const Password=useRef(null)

  const handlebtnclick=()=>{

   const message=checkvalidatedata(Email.current.value,Password.current.value)
   seterrormessage(message)
    if(message) return;
    if(!IsSignInForm)
    {
      createUserWithEmailAndPassword(auth,Email.current.value,Password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: Name.current.value,
      photoURL:USER_AVATAR,
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(adduser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}
        ))
      
    }).catch((error) => {
     
      seterrormessage(error.message)
    });
    
  })
  .catch((error) => {
    const errorcode=error.code
    const errorMessage ="Invalid Credential Please Check";
    seterrormessage(errorcode+" "+errorMessage)
    // ..
  });

    }
   else
    {
      signInWithEmailAndPassword(auth,Email.current.value,Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorMessage ="Sorry,we can't find an account with this email address.Please try again";
    seterrormessage(errorMessage)
  });

    }
  

  }
  const toggleSignUpForm=()=>
  {
      setIsSignInForm(!IsSignInForm)
  }
  return (
    <div>
           <Header/>
           <div className='absolute'>
           <img className='h-screen w-screen object-cover' src={BG_URL} alt="bg"/>

           </div>
      
      <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black w-80 md:w-2/6 p-5 mx-auto right-0 left-0 my-20 bg-opacity-90'>
       <h1 className='text-3xl font-semibold text-white m-8'>{IsSignInForm?"Sign In":"Sign Up"}</h1>
       {!IsSignInForm &&  
       <input ref={Name} className="p-3 pl-5  text-white pr-20 m-8 flex   rounded-md  bg-stone-600 " type="text" placeholder="Full Name"/>}
        <input ref={Email} className="p-3 pl-5  text-white pr-20 m-8 flex w-60 md:w-5/6  rounded-md  bg-stone-600 " type="text" placeholder='Email'/>
        
        <input ref={Password} className="p-3 pl-5 text-white  pr-20 m-8 flex w-60 md:w-5/6 rounded-md bg-stone-600" type="text" placeholder='Password'/>
        <div className='underline text-red-600 rounded-md m-8 text-xl'>{errormessage}</div>
        <button className='rounded-md w-40 md:4/6  p-2 text-xl bg-red-600 text-white m-4 ml-20 md:ml-10'
        onClick={handlebtnclick}
        >
          {IsSignInForm?"Sign In":"Sign Up"}</button>
        
        <div className='text-lg text-stone-400 pl-10 mt-8 flex'>{IsSignInForm?"New to Netflix?":"Already a user"}
        <p className='text-white pl-1 hover:cursor-pointer underline' onClick={toggleSignUpForm}>
          {IsSignInForm?"Sign up now":"Sign In now"}</p>
        </div>

      </form>
      </div>
  )
}

export default Login