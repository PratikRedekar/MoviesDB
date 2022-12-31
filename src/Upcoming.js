// import React from 'react'
// import { useEffect, useState } from 'react';

// const API_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=cb313fb3cff02b0c9d284d5946f767ed";
// const Upcoming = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then(data => {
//         console.log(data)
//         setMovies(data.results)
//       })
//   }, [])
  
//   return (
//     <>
//       <div>Upcoming</div>
//       <div className='container'>
//         <div className='grid'>
//           {movies.map((movieReq) )}
//         </div></div>
//     </>
//   )
// }

// export default Upcoming;