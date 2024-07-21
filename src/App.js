import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/HomePage/Home';
import NavBar from './components/navbar/NavBar';
import Video from './pages/VideoPage/Video';
import NotFound from './components/NotFound';
import SearchResults from './components/SearchResults';
import SideBar from './components/SideBar';

import './App.css';

function App() {
  const isSideBarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      <NavBar />
      <div className='flex'>
        {isSideBarOpen && <SideBar />}
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/watch' Component={Video} />
          <Route path='/results' Component={SearchResults} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </div>
    </>
  );
}

export default App;

/*
      Head
      Body
        - Sidebar 
            -MenuItems
        - MainBodyContainer
            -ButtonsList
            -VideoContainer
              - VideCard 
    */
