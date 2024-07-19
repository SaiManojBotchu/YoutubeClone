import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Video from './pages/Video';
import NotFound from './components/NotFound';
import SearchResults from './components/SearchResults';
import SideBar from './components/SideBar';

import './App.css';

function App() {
  const isSideBarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      <Navbar />
      <div className='flex'>
        {isSideBarOpen && <SideBar />}
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/watch' Component={Video} />
          <Route path='*' Component={NotFound} />
          <Route path='/results' Component={SearchResults} />
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
