import { Helmet } from 'react-helmet';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Count from './Count/Count';
import Courses from './Courses/Courses';
import Events from './Events/Events';
import Welcome from './Welcome/Welcome';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Welcome />
      <Courses />
      <Events />
      <Count />
      <Blog />
    </div>
  );
};

export default Home;
