import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navb from "./Navb";
import Cardd from "./Cardd";
import Comedy from "./Comedy";
import Carou from "./Carou";
import { UserContext } from "./Userprovider";
import { useContext } from "react";
import {
  imageUrl,
  LatestMoviesUrl,
  ComedyMoviesUrl,
  PopularMoviesUrl,
} from "./links";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Banner from "./Banner";
import Moviedet from "./Moviedet";

function App() {
  // const  {popmov,commov,latmov}=useContext(UserContext)
  const  {ban,setBan}=useContext(UserContext)

  console.log(ban);

  // useEffect(() => {
  //   setBan(true)
  // },[])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navb />

        {ban ? <Banner /> : " "}

        {/* <Carou/> */}
        <Routes>
          <Route path="/" element={<Cardd det={PopularMoviesUrl} />}></Route>
          <Route
            path="/comedy"
            element={<Cardd det={ComedyMoviesUrl} />}
          ></Route>
          <Route
            path="/latest"
            element={<Cardd det={LatestMoviesUrl} />}
          ></Route>

           <Route path="/details" element={<Moviedet />}>
            
          </Route> 
            {/* <Route path="/details" element={doSomething( <Moviedet />)} /> */}
          {/* <Route
            path="/details"
            element={
              <DoSomethingWrapper>
                <Moviedet />
              </DoSomethingWrapper>
            } */}
          {/* /> */}

          {/* <Route path='/comey' element={<Comedy/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
