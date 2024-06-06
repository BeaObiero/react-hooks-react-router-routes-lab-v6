import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(()=> {
    fetch('/actors')
    .then(r=> r.json()
  .then(data=>setActors(data)));
  }, [])
  
  return (
    <>
      <header>
        {/* NavBar component goes here */}<NavBar/>
      </header>
      <main>
        {/* Actor info here! */}
        {actors.map((actor) => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
