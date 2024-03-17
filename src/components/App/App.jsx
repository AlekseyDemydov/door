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
import Project from 'components/Project/Project';
import Catalog from 'components/Catalog/Catalog';
import M from 'components/Catalog/M/M';
import PA from 'components/Catalog/PA/PA';
import PE from 'components/Catalog/PE/PE';
import PW from 'components/Catalog/PW/PW';
import PM from 'components/Catalog/PM/PM';
import P from 'components/Catalog/P/P';
import U from 'components/Catalog/U/U';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/door" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/m" element={<M />} />
          <Route path="catalog/pa" element={<PA />} />
          <Route path="catalog/pe" element={<PE />} />
          <Route path="catalog/pw" element={<PW />} />
          <Route path="catalog/pm" element={<PM />} />
          <Route path="catalog/p" element={<P />} />
          <Route path="catalog/u" element={<U />} />
          <Route path="system" element={<Systemopen />} />
          <Route path="projects" element={<Project />} />
          <Route path="contacts" element={<Home />} />
          <Route path="penal" element={<Penal />} />
          <Route path="peregorodki" element={<Peregorodki />} />
          <Route path="system/morekupe" element={<MoreKupe />} />
          <Route path="system/morepenal" element={<MorePenal />} />
          <Route path="system/book180" element={<Book180 />} />
          <Route path="system/book90" element={<Book90 />} />
          <Route path="system/magic" element={<Magic />} />
          <Route path="system/argon" element={<Argon />} />
          <Route path="system/outside" element={<Outside />} />
          <Route path="system/inside" element={<Inside />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
