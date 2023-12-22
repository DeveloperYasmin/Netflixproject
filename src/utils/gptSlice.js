import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
  initialState:{
    movieResults:null,
    movieNames:null,
   
    showGptSearch:false
  },
  reducers:{
   toggleGptSearchView:(state)=>{
    state.showGptSearch=!state.showGptSearch
   },
   addGptMovieResults:(state,action)=>{
    const {movieNames,movieResults}=action.payload
    state.movieNames=movieNames
    state.movieResults=movieResults
   },
   clearMovieResults:(state,action)=>{
  
    state.movieNames.length=0
    state.movieResults.length=0

   }
  }
})

export const {toggleGptSearchView,addGptMovieResults,clearMovieResults}=gptSlice.actions
export default gptSlice.reducer