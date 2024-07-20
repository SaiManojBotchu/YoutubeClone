import { Link } from 'react-router-dom';
import { ytQuerySearchAPI } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { inputJSONData } from '../redux/searchResultsSlice';

export const SuggestedVideoCard = ({ eachResult, showDescription }) => {
  const dispatch = useDispatch();

  const getNewRecommendations = async (inputSearch) => {
    const res = await fetch(
      ytQuerySearchAPI +
        inputSearch +
        '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
    );
    const data = await res.json();
    dispatch(inputJSONData(data));
  };

  return (
    <Link to={'/watch?v=' + eachResult.id.videoId} key={eachResult.id.videoId}>
      <div
        className='m-1 mr-0 flex justify-start items-start'
        onClick={() => {
          getNewRecommendations(eachResult.snippet.title);
        }}>
        <div
          className={`mb-2 hover:cursor-pointer ${
            showDescription === false && 'flex-1'
          }`}>
          <img
            src={eachResult.snippet.thumbnails.medium.url}
            alt='thumbnail'
            className='rounded-xl'
          />
        </div>
        <div className={`ml-4 ${showDescription === false && 'flex-1'}`}>
          <p className='mb-1'>{eachResult.snippet.title}</p>
          <p className='inline-block text-sm text-[#848181] mb-2'>
            {eachResult.snippet.channelTitle + ' ☑️'}
          </p>
          {showDescription && (
            <p className='text-sm text-[#535050]'>
              {eachResult.snippet.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
