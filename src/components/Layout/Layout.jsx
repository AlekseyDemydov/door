import { Outlet } from 'react-router-dom';
import s from './Layout.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';


// import SimpleSlider from 'components/Slider/Slider';
// import AutoLayoutExample from 'components/Grid/Grid';
// import st from './Home.module.scss';
// import first from './img/penal.jpg';
// import CustomArrows from 'components/Slider/Slider';

const Layout = () => {
  return (
    <>
        <Header />
      <div className={s.container}>
        {/* <div className={st.herobox}>
          <CustomArrows />
          <br />
          <br />
          <AutoLayoutExample />
        </div>
        <div className={st.bgHero}></div> */}
        <div className={s.outlet}>
          <Outlet />
          
        </div>
        <Footer/>
      </div>
    </>
  );
};
export default Layout;
