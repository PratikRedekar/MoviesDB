import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import Upcoming from './Upcoming';
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=cb313fb3cff02b0c9d284d5946f767ed";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=cb313fb3cff02b0c9d284d5946f767ed&query";
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }, [])

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching")
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=cb313fb3cff02b0c9d284d5946f767ed&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch (e) {
      console.log(e);

    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
      {/* <BrowserRouter>
          <NavLink  to="/Upcoming">Upcoming</NavLink>
          <Routes><Route exact path="/Upcoming" element={<Upcoming />} /></Routes>
          
          </BrowserRouter> */}
        <Container fluid>
          <Navbar.Brand href="/home">MovieDB App PR</Navbar.Brand>
          <div className="text-muted"  href="Upcoming.js">Upcoming</div>&nbsp
          <div className="text-muted"  href="Upcoming.js">Top Rated</div>&nbsp
          <div className="text-muted"  href="Upcoming.js">Popular</div>
          
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          
          
          <Upcoming />
          
          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: '100px' }}
              navbarScroll></Nav>
            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className='container'>
            <div className='grid'>
              {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
            </div></div>
        ) : (
          <h2 >!! No Movies Found !!</h2>
        )}



      </div>
    </>
  );
}

export default App;
