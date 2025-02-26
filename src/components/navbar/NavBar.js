import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import IconComponent from './IconComponent';
import SuggestionsComponent from './SuggestionsComponent';
import SearchBar from './SearchBar';

import { toggleSideBarMenu } from '../../redux/appSlice';
import { manageCache } from '../../redux/cacheSlice';
import { inputJSONData } from '../../redux/searchResultsSlice';

import {
  YT_QUERY_SEARCH_API,
  YT_SEARCH_API,
  CORS_PROXY_URL
} from '../../utils/constants';

export default function NavBar() {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const popupRef = useRef(null);

  const cacheSlice = useSelector((store) => store.cache);
  const dispatch = useDispatch();

  const handleSearchOnClick = async (value = searchInput) => {
    try {
      const res = await axios(
        YT_QUERY_SEARCH_API + value + '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
      );
      dispatch(inputJSONData(res.data));
    } catch (e) {
      console.log('Navbar - handleSearchOnClick', e);
    }
  };

  /* Implementing De-Bouncing */
  useEffect(() => {
    const timer = setTimeout(() => {
      // checking in cache before calling the API
      if (cacheSlice[searchInput]) {
        setSuggestions(cacheSlice[searchInput]);
      } else {
        callSearchAPI();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const callSearchAPI = async () => {
    try {
      console.log('--- CORS ---', CORS_PROXY_URL);

      // const res = await axios(CORS_PROXY_URL + YT_SEARCH_API + searchInput);
      // console.log(res.data[1]);
      // setSuggestions(res.data[1]);
      // dispatch(
      //   manageCache({
      //     [searchInput]: res.data[1]
      //   })
      // );

      const res = await axios(
        CORS_PROXY_URL + encodeURIComponent(YT_SEARCH_API + searchInput)
      );
      // console.log(JSON.parse(res.data.contents)[1]);
      setSuggestions(JSON.parse(res.data.contents)[1]);
      // caching prev result incase presses backspace
      dispatch(
        manageCache({
          [searchInput]: JSON.parse(res.data.contents)[1]
        })
      );
    } catch (e) {
      console.log('Primary URL failed, trying fallback URL', e);
      try {
        const res = await axios(YT_SEARCH_API + searchInput);
        setSuggestions(res.data[1]);
        // caching prev result incase presses backspace
        dispatch(
          manageCache({
            [searchInput]: res.data[1]
          })
        );
      } catch (err) {
        console.error('Both primary and fallback URLs failed', e);
      }
    }
  };

  const toggleSideBarMenuHandler = () => {
    dispatch(toggleSideBarMenu());
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    setShowSuggestions(true);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      // Hide suggestions when clicking outside
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className='flex flex-1 justify-between items-center content-center py-2.5 px-8'
      onClick={handleClickOutside}>
      <IconComponent toggleSideBarMenuHandler={toggleSideBarMenuHandler} />
      <div ref={popupRef} className='flex items-center relative w-[40%]'>
        <SearchBar
          searchInput={searchInput}
          handleSearchOnClick={handleSearchOnClick}
          handleSearchInput={handleSearchInput}
          setShowSuggestions={setShowSuggestions}
        />
        {showSuggestions && (
          <SuggestionsComponent
            suggestions={suggestions}
            setShowSuggestions={setShowSuggestions}
            setSearchInput={setSearchInput}
            handleSearchOnClick={handleSearchOnClick}
          />
        )}
      </div>
      <AccountCircleIcon fontSize='large' />
    </div>
  );
}
