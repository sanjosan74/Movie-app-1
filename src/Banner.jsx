import axios from "axios";
import React, { useEffect, useState } from "react";
import "./links";
import { ComedyMoviesUrl, imageUrl } from "./links";

function Banner() {
  const [bann, setBann] = useState([]);
  useEffect(() => {
    axios.get(ComedyMoviesUrl).then((result) => {
      // console.log(Math.floor(Math.random()*(result.data.results.length-1)));
      const num = Math.floor(Math.random() * (result.data.results.length - 1));
      setBann(result.data.results[num]);
    });
  }, []);

  console.log(bann);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageUrl}${bann.backdrop_path})`,
          backgroundSize: "cover",
          color: "white",
          padding: "100px",
          width: "100%",
          height: "500px",
          color:'black',
        }}
      >
        <h1 style={{margin:'100px'}}>{bann.name}</h1>
        <p>{bann.overview}</p>
      </div>
    </>
  );
}

export default Banner;
