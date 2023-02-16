import './App.css';
import NavigationBar from './component/layout/NavigationBar';
import SideBar from './component/layout/SideBar';
import Footer from './component/layout/Footer';
import './component/fontawesome/fontawesome'
import { Route, Routes } from 'react-router-dom';
import Charts from './component/pages/Charts';
import Examples from './component/pages/Examples';
import Forms from './component/pages/Forms';
import Mailbox from './component/pages/Mailbox';
import Search from './component/pages/Search';
import UIS from './component/pages/UIS';
import Plus from './component/pages/Plus';
import MainPages from './component/pages/MainPages';
function App() {
  return (
    <div className="wrapper">
      {/* <Route path={'/index'||'/index2'} element={<Preloader />} /> */}
      <NavigationBar />
      <SideBar />
      <Routes>
        <Route path="/*" element={<Charts />} />
      </Routes>
      <MainPages/>
      <UIS />
      <Examples />
      <Mailbox />
      <Forms />
      <Search/>
      <Plus/>
      <Footer />
    </div>
  );
}

export default App;
