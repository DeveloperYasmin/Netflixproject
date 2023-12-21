import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
  initialState:{
    movieResults:null,
    moviesNames:null,
    showGptSearch:false
  },
  reducers:{
   toggleGptSearchView:(state)=>{
    state.showGptSearch=!state.showGptSearch
   },
   addGptMovieResults:(state,action)=>{
    const {moviesNames,movieResults}=action.payload
    state.moviesNames=moviesNames
    state.movieResults=movieResults
   }
  }
})

export const {toggleGptSearchView,addGptMovieResults}=gptSlice.actions
export default gptSlice.reducer