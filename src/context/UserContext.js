import React, { useReducer } from "react";
import axios from "axios";
import {API} from '../helpers/const';

export const userContext=React.createContext()
//create initial object, later photos will be assigned with data from API
const INIT_STATE={
    photos:null
}
//
const reducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "GET_PHOTOS":
            return{...state, photos:action.payload}
        default:
            return{...state}
    }
}   

    const UserContextProvider=({children})=>{
        const [state,dispatch]=useReducer(reducer,INIT_STATE)
        //Fetching data from API (API can be found in ../src/helpers/const)
        const getPhotos=async()=>{
            const{data}=await axios(API)
            dispatch({
                type: "GET_PHOTOS",
                payload:data
            })
            

        }
        
        
    return(
        // passing props to children so i have access in other components
        <userContext.Provider value={{photos:state.photos,getPhotos}}>
            {children}
        </userContext.Provider>
    );

};
export default UserContextProvider;