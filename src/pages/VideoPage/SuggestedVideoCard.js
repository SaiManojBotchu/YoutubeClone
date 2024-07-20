import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { inputJSONData } from '../../redux/searchResultsSlice';
import { ytQuerySearchAPI } from '../../utils/constants';

export const SuggestedVideoCard = ({ eachResult, showDescription }) => {
  const dispatch = useDispatch();

  const { id, snippet } = eachResult;
  const { videoId } = id;
  const { title, channelTitle, thumbnails } = snippet;
  const { medium } = thumbnails;
  const { url } = medium;

  const getNewRecommendations = async (inputSearch) => {
    const res = await fetch(
      ytQuerySearchAPI + inputSearch + '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
    );
    const data = await res.json();
    dispatch(inputJSONData(data));
  };

  return (
    <Link to={'/watch?v=' + videoId} key={videoId}>
      <div
        className='flex justify-start items-start m-1 mr-0'
        onClick={() => getNewRecommendations(title)}>
        <div className='flex-1 mb-2 hover:cursor-pointer'>
          <img src={url} alt='thumbnail' className='rounded-xl' />
        </div>
        <div className='flex-1 ml-4'>
          <p className='mb-1'>{title}</p>
          <p className='inline-block text-sm text-[#848181] mb-2'>{channelTitle}</p>
        </div>
      </div>
    </Link>
  );
};
