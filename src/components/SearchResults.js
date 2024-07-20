import { useSelector } from 'react-redux';
import { SuggestedVideoCard } from './SuggestedVideoCard';

const SearchResults = () => {
  const searchResultsSlice = useSelector((store) => store.searchResultsSlice);

  const searchResults = searchResultsSlice.searchJSONData.items;

  console.log(searchResults);

  if (!searchResults) return null;

  return (
    <div className='mt-5'>
      {searchResults.map((eachResult) => (
        <SuggestedVideoCard
          eachResult={eachResult}
          showDescription={true}
          key={eachResult.id.videoId}
        />
      ))}
    </div>
  );
};

export default SearchResults;
