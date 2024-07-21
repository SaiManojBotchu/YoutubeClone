import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
  const { searchInput, handleSearchInput, handleSearchOnClick, setShowSuggestions } = props;
  return (
    <div
      className='flex items-center w-full h-10'
      onClick={() => setShowSuggestions(true)}>
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
          onClick={handleSearchOnClick}>
          <SearchIcon />
        </div>
      </Link>
    </div>
  );
}
