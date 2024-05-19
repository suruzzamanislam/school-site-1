import { Helmet } from 'react-helmet';
import Hero from '../../Component/Hero';
const Research = () => {
  return (
    <div>
      <Helmet>
        <title>Research</title>
      </Helmet>
      <Hero title="Research"></Hero>

      <div>
        <div>
          <h1>Current Research</h1>
        </div>
        <div>
          <h1>Research News</h1>
        </div>
      </div>
    </div>
  );
};

export default Research;
