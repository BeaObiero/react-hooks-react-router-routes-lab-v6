import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); // Get the movie id from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]); // Whenever the movie id changes, update the movie state with the fetched data

  if (!movie) {
    return <div>Loading...</div>; // If movie state is 'null', display 'loading'
  }

  return (
    <>
      <header>
        <NavBar /> {/* NavBar component goes here */}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
