

// const routes = [
   
//   ];

// export default routes;
//OOOOO
//

import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
const routes =[
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/directors',
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: '/actors',
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: 'movie/:id',
    element: <Movie />,
    errorElement: <ErrorPage />
  },
   
];
 
//const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<RouterProvider routes={routes}/>)
export default routes;