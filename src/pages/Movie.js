// import { useEffect, useState } from "react";

// function Movie() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Movie info here! */}
//       </main>
//     </>
//   );
// };

// export default Movie;
// ///OOOOO
///OOOOO

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
const {id}= useParams()
  const [movie, setMovie] = useState({
    title: '',
    time: '',
    genres:[]
  })
  
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res=>res.json())
      .then(data => {
      setMovie(data)
    })
  }, [id])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>Duration: {movie.time} min</p>
        {movie.genres.map((g,ind )=> (
          <span
          key={ind}
          >{g }</span>
        ))}
      </main>
    </>
  );
};

export default Movie;

