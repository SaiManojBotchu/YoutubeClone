import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSideBarMenu } from '../redux/appSlice';
import { manageCache } from '../redux/cacheSlice';
import { inputJSONData } from '../utils/searchResultsSlice';
import { ytQuerySearchAPI, ytSearchAPI } from '../utils/constants';
import userIcon from '.././images/avatar-2.png';
import youtube_logo from '.././images/youtube.png';

const Header = () => {
  /* inputSearch variable contains the text which is typed by the user */
  const [inputSearch, setinputSearch] = useState('');

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const cacheSlice = useSelector((store) => store.cache);

  const dispatch = useDispatch();

  const [suggestionClick, setSuggestionClick] = useState(false);

  const HandleSearchOnClick = async () => {
    const data = await fetch(
      ytQuerySearchAPI + inputSearch + '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
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
      if (cacheSlice[inputSearch]) {
        setSearchSuggestions(cacheSlice[inputSearch]);
      } else {
        /* If the suggestions are not there in the cacheSlice and the event delay is > 200ms then
      make an api call and store the inputSearch text and suggestion results of that particular inputSearch Text*/
        callSearchAPI();
      }
      /* If the difference b/w two key press events don't make an api call */
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // run the useEffect every time when user types something in the search bar

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch]);

  // function to make api call on the inputSearch text
  const callSearchAPI = async () => {
    try {
      const data = await fetch(ytSearchAPI + inputSearch);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      dispatch(
        manageCache({
          [inputSearch]: json[1]
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const toggleSideBarMenuHandler = () => {
    /* disptach an action toggle side bar menu so that the state in the redux store get's updated*/
    dispatch(toggleSideBarMenu());
    console.log('sidebar');
  };

  return (
    <div
      className='flex flex-1 justify-between items-center content-center p-3 shadow-lg'
      // FIXME:
      onClick={() => {
        setSuggestionClick(true);
        console.log('on');
      }}>
      {/* The suggestion box inside the search bar needs to close when user clicks other parts of 
      header apart from search bar*/}

      {/* Left Side Two Logos */}
      <div className='flex'>
        {/* This is the hamburger logo. When you click on it redux store get's updated */}
        <div className='mx-2 hover:cursor-pointer'>
          <i
            className='fa-solid fa-bars text-[22px] ml-4 mt-1'
            onClick={toggleSideBarMenuHandler}></i>
        </div>
        <div className='ml-2'>
          <Link to={'/'}>
            <img src={youtube_logo} alt='yt_logo' className='h-[30px]' />
          </Link>
        </div>
      </div>

      <div className='flex items-center relative'>
        <input
          type='text'
          placeholder='search'
          className='py-2 px-4 rounded-l-3xl border border-solid border-black w-96 outline-none'
          value={inputSearch}
          onChange={(e) => {
            setinputSearch(e.target.value);
            setSuggestionClick(false);
          }}
        />
        {/* when user is typing in the input field the suggestions box needs to be shown below the
        search bar*/}

        <Link to='/results'>
          <div
            className='h-[42px] px-3 rounded-r-3xl bg-slate-50 border border-black'
            onClick={HandleSearchOnClick}>
            <i className='fa-solid fa-magnifying-glass relative top-2'></i>
          </div>
        </Link>

        {/* SHOWING THE SUGGESTION BOX */}
        {!suggestionClick && (
          <div className='absolute bg-white top-full right-12 left-0 shadow-xl mt-3 rounded-md'>
            <ul className='list-none'>
              {searchSuggestions.map((s) => (
                <div
                  className='flex items-center ml-2 my-1 p-1 hover:bg-gray-200 hover:cursor-default'
                  key={s}
                  onClick={() => {
                    /* The suggestion box needs to clone when user clicks on any one of the suggestions*/
                    setSuggestionClick(true);
                    /* The suggestion should be there in the input field */
                    setinputSearch(s);
                  }}>
                  <i className='fa-solid fa-magnifying-glass mr-4'></i>
                  <li key={s} className='mb-1'>
                    {s}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/*Profile Pic Field*/}
      <div className='mr-4'>
        <img src={userIcon} alt='userIcon' className='h-10 mr-4' />
      </div>
    </div>
  );
};

export default Header;

/*
When you type in the search bar you will be making api calls. But you will not make api calls for 
each and every key press. Using debouncing technique with a delay of 200ms.
*/
