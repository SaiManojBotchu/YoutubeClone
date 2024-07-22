import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { inputJSONData } from '../../redux/searchResultsSlice';
import { YT_QUERY_SEARCH_API } from '../../utils/constants';
import formatViews from '../../utils/formatViews';
import formatTime from '../../utils/formatTime';

export const SuggestedVideoCard = ({ eachResult, showDescription }) => {
  const dispatch = useDispatch();
  // console.log(eachResult);

  const { id, snippet, statistics } = eachResult;
  const { videoId } = id;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const { medium, maxres } = thumbnails;

  const getNewRecommendations = async (inputSearch) => {
    const res = await fetch(
      YT_QUERY_SEARCH_API + inputSearch + '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
    );
    const data = await res.json();
    console.log(data);
    dispatch(inputJSONData(data));
  };

  return (
    <Link to={'/watch?v=' + videoId} key={videoId}>
      <div
        className='flex justify-start items-start ml-3 mb-2'
        onClick={() => getNewRecommendations(title)}>
        <div className='flex-1 hover:cursor-pointer'>
          <img src={maxres?.url || medium.url} alt='thumbnail' className='rounded-lg' />
        </div>
        {/* <div className='flex-1 ml-2'>
          <p className='mb-1'>{title}</p>
          <p className='inline-block text-sm text-[#848181] mb-2'>{channelTitle}</p>
        </div> */}
        <div className='flex-1 ml-2'>
          <p className='line-clamp-2 font-semibold text-xs mb-2'>{snippet.title}</p>
          <div className='text-neutral-500 font-medium' style={{ fontSize: '11px' }}>
            <p>{channelTitle}</p>
            <p>
              {formatViews(statistics?.viewCount)} views • {formatTime(publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
