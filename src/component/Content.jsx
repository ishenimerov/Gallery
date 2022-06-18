import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/UserContext";
import Button from "@material-ui/core/Button";
import { makeStyles, mergeClasses } from "@material-ui/styles";

const useStyles=makeStyles({
  button:{
    width: '120px',
    height: '40px',
    margin: '20px 0'
  }
})


export const Content=()=>{
    const classes = useStyles();
    const {photos, getPhotos}=useContext(userContext) // desctructure of data and function with useContext hook
    const [visible, setVisible]=useState(10) // create a state hook with initial value 10 to render 10 images in next steps 
    // useEffect is being used to trace changes in parent object
   useEffect(()=>{
    getPhotos() 
     
   },[])

    return(
       <>
        { //use ternary operator because first render is null which is (false) then second is with data (true)
            photos ? (
            
              <div className="container">
                <div className="imageList">
                    {
                      photos.slice(0,visible).map((item)=>(
                        <img src={item.url} alt={item.title} key={item.id} className="imageListItem" />
                      ))
                    }
                </div>
                  <Button onClick={() => setVisible(visible + 10)} variant="contained" color="secondary" className={classes.button} disabled={(visible===100)}>
                                   Load more
                  </Button>
              </div>
               
            ):
            (
                <h2>Loading</h2>
            )
        }
       </>
    );
};
export default Content;