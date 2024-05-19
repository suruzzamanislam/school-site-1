import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Admissions from '../Pages/Admissinos/Admissions';
import Academics from '../Pages/Academics/Academics';
import Research from '../Pages/Research/Research';

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
      {
        path: '/academics',
        element: <Academics></Academics>,
      },
      {
        path: '/research',
        element: <Research></Research>,
      },
    ],
  },
]);

export default router;
