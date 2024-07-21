import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { toggleSideBarMenu } from '../../redux/appSlice';
import { manageCache } from '../../redux/cacheSlice';
import { inputJSONData } from '../../redux/searchResultsSlice';

import { ytQuerySearchAPI, ytSearchAPI } from '../../utils/constants';
import youtube_logo from '../../images/youtube.png';

const NavBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cacheSlice = useSelector((store) => store.cache);
  const dispatch = useDispatch();

  const HandleSearchOnClick = async () => {
    const data = await fetch(
      ytQuerySearchAPI + searchInput + '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
    );
    const json = await data.json();
    // console.log(json);
    dispatch(inputJSONData(json));
  };
  /* Implementing De-Bouncing */
  useEffect(() => {
    const timer = setTimeout(() => {
      /* If the query is already in the cache there is no need to make an api call.
      For example If user typed India then you will make an api call and you will get some 
      suggestion results. Then user typed n, now the input string becomes Indian. Again you will
      generate suggestion results from Indian. Now, If user typed backspace you will get India.
      Now there is no need to make an api call again if you cached the suggestion results of India
      when you first encountered it. So, keep these suggestion results in the redux store */
      if (cacheSlice[searchInput]) {
        setSuggestions(cacheSlice[searchInput]);
      } else {
        /* If the suggestions are not there in the cacheSlice and the event delay is > 1000ms then
      make an api call and store the searchInput text and suggestion results of that particular searchInput Text*/
        callSearchAPI();
      }
      /* If the difference b/w two key press events don't make an api call */
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // run the useEffect every time when user types something in the search bar

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  // function to make api call on the searchInput text
  const callSearchAPI = async () => {
    console.log('callSearchAPI');
    try {
      const res = await fetch(ytSearchAPI + searchInput);
      // console.log(res);
      const data = await res.json();
      console.log(data);
      setSuggestions(data[1]);
      dispatch(
        manageCache({
          [searchInput]: data[1]
        })
      );
    } catch (err) {
      console.log('Navbar - Error: ' + err);
    }
  };

  const toggleSideBarMenuHandler = () => {
    /* disptach an action toggle side bar menu so that the state in the redux store get's updated*/
    dispatch(toggleSideBarMenu());
    console.log('sidebar');
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    setShowSuggestions(true);
  };

  return (
    <div
      className='flex flex-1 justify-between items-center content-center py-2.5 px-8'
      // FIXME:
      onClick={() => {
        setShowSuggestions(true);
        console.log('Input');
      }}>
      {/* The suggestion box inside the search bar needs to close when user clicks other parts of 
      header apart from search bar*/}

      <IconComponent toggleSideBarMenuHandler={toggleSideBarMenuHandler} />
      <div className='flex items-center relative w-[40%]'>
        <div className='flex items-center w-full h-10'>
          <input
            className='py-2 px-4 rounded-l-full border border-gray-300 flex-grow h-full'
            type='text'
            placeholder='Search'
            value={searchInput}
            onChange={handleSearchInput}
          />
          <Link to='/results' className='h-full'>
            <div
              className='px-5 rounded-r-full bg-slate-50 border border-gray-300 h-full flex items-center justify-center'
              onClick={HandleSearchOnClick}>
              <SearchIcon />
            </div>
          </Link>
        </div>
        {/* SHOWING THE SUGGESTION BOX */}
        {showSuggestions && (
          <SuggestionsComponent
            suggestions={suggestions}
            setShowSuggestions={setShowSuggestions}
            setSearchInput={setSearchInput}
          />
        )}
      </div>
      <AccountCircleIcon fontSize='large' />
    </div>
  );
};

export default NavBar;

function IconComponent({ toggleSideBarMenuHandler }) {
  return (
    <div className='flex items-center'>
      <MenuIcon
        className='hover:cursor-pointer mr-3'
        onClick={toggleSideBarMenuHandler}
      />
      <Link to={'/'}>
        <img src={youtube_logo} alt='yt_logo' className='h-[30px]' />
      </Link>
    </div>
  );
}

function SuggestionsComponent({ suggestions, setShowSuggestions, setSearchInput }) {
  useEffect(() => {
    console.log('Suggestions is working');
  }, []);

  return (
    <div className='absolute bg-white top-full right-12 left-0 shadow-xl mt-3 rounded-md'>
      <ul className='list-none'>
        {suggestions.map((s) => (
          <div
            className='flex items-center ml-2 my-1 p-1 hover:bg-gray-200 hover:cursor-default'
            key={s}
            onClick={() => {
              /* The suggestion box needs to clone when user clicks on any one of the suggestions*/
              setShowSuggestions(true);
              /* The suggestion should be there in the input field */
              setSearchInput(s);
            }}>
            <i className='fa-solid fa-magnifying-glass mr-4'></i>
            <li key={s} className='mb-1'>
              {s}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
