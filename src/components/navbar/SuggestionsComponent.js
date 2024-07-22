import { Link } from 'react-router-dom';

export default function SuggestionsComponent(props) {
  const { suggestions, setShowSuggestions, setSearchInput, handleSearchOnClick } = props;
  return (
    <div className='absolute bg-white top-full right-12 left-0 shadow-xl mt-3 rounded-md'>
      <ul className='list-none'>
        {suggestions?.map((s) => (
          <Link to='/results' key={s} className='h-full'>
            <div
              className='flex items-center ml-2 my-1 p-1 hover:bg-gray-200'
              onClick={() => {
                console.log('1');
                setSearchInput(s);
                setShowSuggestions(false);
                handleSearchOnClick();
              }}>
              <i className='fa-solid fa-magnifying-glass mr-4'></i>
              <li key={s} className='mb-1'>
                {s}
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
