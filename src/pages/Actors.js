// import { useEffect, useState } from "react";

// function Actors() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Actor info here! */}
//       </main>
//     </>
//   );
// };

// export default Actors;
// OOOOOO

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res=>res.json())
      .then(data => {
      setActors(data)
    })
  }, [])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <article
          key={index}
          >
            <h2>{actor.name}</h2>
            <ul>
            {actor.movies.map((m, ind) => (
              <li
              key={ind}
              >{m}</li>
            ))}
            </ul>
          </article>
))}
      </main>
    </>
  );
};

export default Actors;


