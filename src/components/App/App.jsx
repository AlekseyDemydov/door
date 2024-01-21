import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'components/Home/Home';
import Peregorodki from 'components/Peregorodki/Peregorodki';
import Penal from 'components/Penal/Penal';
import Systemopen from 'components/Systemopen/Systemopen';
import MorePenal from 'components/Systemopen/MorePenal/MorePenal';
import MoreKupe from 'components/Systemopen/MoreKupe/MoreKupe';
import Book180 from 'components/Systemopen/Book180/Book180';
import Book90 from 'components/Systemopen/Book90/Book90';
import Magic from 'components/Systemopen/Magic/Magic';
import Argon from 'components/Systemopen/Argon/Argon';
import Inside from 'components/Systemopen/Inside/Inside';
import Outside from 'components/Systemopen/Outside/Outside';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/dvery" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="catalog" element={<Home />} />
          <Route path="system" element={<Systemopen/>} />
          <Route path="projects" element={<Home />} />
          <Route path="contacts" element={<Home />} />
          <Route path="penal" element={<Penal/>} />
          <Route path="peregorodki" element={<Peregorodki />} />
          <Route path="system/morekupe" element={<MoreKupe />} />
          <Route path="system/morepenal" element={<MorePenal />} />
          <Route path="system/book180" element={<Book180 />} />
          <Route path="system/book90" element={<Book90 />} />
          <Route path="system/magic" element={<Magic/>} />
          <Route path="system/argon" element={<Argon/>} />
          <Route path="system/outside" element={<Outside/>} />
          <Route path="system/inside" element={<Inside/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
