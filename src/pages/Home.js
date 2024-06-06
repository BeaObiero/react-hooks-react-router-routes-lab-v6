import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const[movie, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies') 
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);
  return (
    <>
      <header>
        {/* NavBar component goes here */}<NavBar/>
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))} {/**just the movie cards are rendered here as to opposed to the actors and directors components */}
      </main>
    </>
  );
};

export default Home;
