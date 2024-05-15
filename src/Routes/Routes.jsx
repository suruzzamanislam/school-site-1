import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Admissions from '../Pages/Admissinos/Admissions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/admissions',
        element: <Admissions></Admissions>,
      },
    ],
  },
]);

export default router;
