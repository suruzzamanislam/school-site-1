import Banner from './Banner/Banner';
import Courses from './Courses/Courses';
import Events from './Events/Events';
import Welcome from './Welcome/Welcome';

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <Courses />
      <Events />
    </div>
  );
};

export default Home;
