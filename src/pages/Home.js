// import { useEffect, useState } from "react";

// function Home() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Info goes here! */}
//       </main>
//     </>
//   );
// };

// export default Home;
/////OOOOO

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(res => res.json())
      .then(data => {
      setMovies(data)
    })
  }, [])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Home Page</h1>
        <NavBar/>
      </header>
      <main>
        
        {/* Info goes here! */}
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            />
        ))}
      </main>
    </>
  );
};

export default Home;
