// pages/index.tsx

import Footer from '../components/footer';
import LogoSlider from '../components/logoslide';
import ImageRight from './imageright';
import Slider from './imageslider';
import Imageslider from './imageslider'

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <ImageRight />
      <Imageslider/>
      <LogoSlider/>
      <Footer />
      
    </div>
  );
};

export default Home;
