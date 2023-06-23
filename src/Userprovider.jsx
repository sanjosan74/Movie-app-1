import React, { createContext, useEffect, useState } from 'react'
// import './links'
import axios from "axios";
import { ComedyMoviesUrl, LatestMoviesUrl, PopularMoviesUrl } from './links';
const UserContext = createContext();
function Userprovider({children}) {
    const val="anu" 
  const [ban, setBan] = useState(true);
  const[movie,setMovie]=useState({})

    // const [commov,setCommov]=useState([])
    // const[popmov,setPopmov]=useState([])
    // const[latmov,setLatmov]=useState([])

    // useEffect(() => {
    //   axios.get(LatestMoviesUrl).then((result)=>{
    //     setPopmov(result.data.results)
    //   })
    //   axios.get(ComedyMoviesUrl).then((movies)=>{
    //     setCommov(movies.data.results)
    //   })
    //   axios.get(PopularMoviesUrl).then((movies)=>{
    //       setLatmov(movies.data.results)
    //   })
    // }, [])
    
   // console.log(popmov);
   //s console.log(latmov);


    
  return (
    <div>
        <UserContext.Provider value={{ban, setBan,movie,setMovie}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default Userprovider
export {UserContext}