// import SimpleSlider from 'components/Slider/Slider';
import AutoLayoutExample from 'components/Home/Grid/Grid';
import s from './Home.module.scss';
// import first from './img/penal.jpg';

import HeroSlider from 'components/Home/Slider/Slider';



const Home = () => {
  return (
    <>
    <div className={s.herobox}>
    <HeroSlider/>
    <br />
    <br />
    <AutoLayoutExample/>
    </div>
    <div className={s.bgHero}></div>
        
        
     
      
    </>
  );
};

export default Home;
