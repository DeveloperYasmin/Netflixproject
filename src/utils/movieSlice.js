import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{  
        nowplayingmovies:null,
         popularmovies:null,
         trailervideo:null,
         toprated:null,
         upcoming:null
    },
    reducers:{
        addnowplayingmovies:(state,action) =>{
           state.nowplayingmovies =action.payload
           
        },
        addpopularmovies:(state,action)=>{
         state.popularmovies=action.payload
        },
        addtrailervideo:(state,action)=>{
          state.trailervideo=action.payload
        },
        addtoprated:(state,action)=>{
        state.toprated=action.payload
        },
        addupcoming:(state,action)=>{
            state.upcoming=action.payload
        }

    }
})

export const {addnowplayingmovies,addtrailervideo,addpopularmovies,addtoprated,addupcoming}=movieSlice.actions
export default movieSlice.reducer