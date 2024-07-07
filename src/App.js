import './App.css';
import NavigationBar from './component/layout/NavigationBar';
import Footer from './component/layout/Footer';
import './component/fontawesome/fontawesome'
import { Route, Routes, useLocation } from 'react-router-dom';
import Charts from './component/pages/Charts';
import Examples from './component/pages/Examples';
import Forms from './component/pages/Forms';
import Mailbox from './component/pages/Mailbox';
import Search from './component/pages/Search';
import UIS from './component/pages/UIS';
import Plus from './component/pages/Plus';
import MainPages from './component/pages/MainPages';
import NewSideBar from './component/layout/NewSideBar';
import PagesLayout from './component/pages/PagesLayout';
import Body from './component/body/Body';
import TopNavBar from './component/layout/topNavBar/TopNavBar';
import ControlSidebar from './component/layout/ControlSidebar';
import { useDispatch } from 'react-redux';
import { SetCollapse} from './component/redux/actions/bodyActions';
import Tables from './component/pages/Tables';

// import ControlSidebar from './component/layout/ControlSidebar';

function App() {
  const dispatch=useDispatch()
  const location = useLocation().pathname
  //manage when to showw TopNavbar
    const manageNav= (location === '/pages/layout/top-nav' || location === '/pages/layout/top-nav-sidebar')

  const handleNav = () => {
    if (manageNav)
      return (<><TopNavBar />
      </>)
    else
      return (<>
      <NavigationBar />
        </>
        )

  }
  return (
    <Body>
      <div className="wrapper">
        {handleNav()}
        <NewSideBar />
        <ControlSidebar/>
        <Routes>
          {MainPages.map((props, key) => <Route key={key} {...props} />)}
          <Route path='/pages/'>
            <Route path='charts/'>
              {Charts.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            <Route path='tables/'>
              {Tables.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            <Route path='layout/'>
              {PagesLayout.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            <Route path='examples/'>
              {Examples.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            <Route path='UI/'>
              {UIS.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            <Route path='mailbox/'>
              {Mailbox.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            <Route path='forms/'>
              {Forms.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            <Route path='search/'>
              {Search.map((props, key) => <Route key={key} {...props} />)}
            </Route>
            {Plus.map((props, key) => <Route key={key} {...props} />)}
          </Route>
        </Routes>
        <Footer />
      </div>
      <div id="sidebar-overlay" onClick={()=>dispatch(SetCollapse())}></div>
    </Body>

  );
}

export default App;
