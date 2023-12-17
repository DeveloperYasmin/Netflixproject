import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{  
        nowplayingmovies: null,
         trailervideo:null
    },
    reducers:{
        addnowplayingmovies:(state,action) =>{
           state.nowplayingmovies =action.payload
        },
        addtrailervideo:(state,action)=>{
          state.trailervideo=action.payload
        },

    }
})

export const {addnowplayingmovies,addtrailervideo}=movieSlice.actions
export default movieSlice.reducer