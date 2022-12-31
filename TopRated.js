import React from 'react'
import { useEffect, useState } from 'react';


const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=cb313fb3cff02b0c9d284d5946f767ed";
const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }, [])
  
  return (
    <>
      <div>Top Rated</div>
      <div className='container'>
        <div className='grid'>
          {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
        </div></div>
    </>
  )
}

export default TopRated;