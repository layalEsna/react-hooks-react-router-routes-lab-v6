// import { NavLink } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   return (
//     <nav className="navbar">

//     </nav>
//     );
// };

// export default NavBar;
//OOOOOOOOO

import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Directors from "../pages/Directors";
import Actors from "../pages/Actors";

function NavBar() {
  return (
    
      <nav className="navbar">
      <NavLink
        to='/'
        className={({isActive})=> (isActive? 'navbar-link active' : 'navbar-link')}
      >
         Home 
        </NavLink>
      <NavLink
        to='/directors'
        className={({isActive})=> isActive? 'navbar-link active': 'navbar-link'}
      >
          Directors
        </NavLink>
      <NavLink
        to='/actors'
        className={({isActive})=> isActive? 'navbar-link active' : 'navbar-link'}
      >
         Actors 
        </NavLink>
      </nav>
   
  );
};

export default NavBar;
