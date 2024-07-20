import { useEffect } from 'react';
import { closeSideBarMenu } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SuggestedVideoCard } from './SuggestedVideoCard';
import CommentsContainer from './CommentsContainer';

function Video() {
  const searchResultsSlice = useSelector((store) => store.searchResultsSlice);

  const searchResults = searchResultsSlice.searchJSONData.items;

  const [params] = useSearchParams();

  /* get the dispatch so that you can dispatch an action to close the side bar menu*/
  const disptach = useDispatch();

  /* Closing the hamburger menu when user redirects to the watch page */
  const close = () => {
    disptach(closeSideBarMenu());
  };

  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!searchResults) return null;

  return (
    <div className='flex m-5'>
      <iframe
        className='rounded-2xl'
        width='75%'
        height='590'
        src={
          `https://www.youtube.com/embed/${params.get(
            'v'
          )}` /*reading the video id from the url*/
        }
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>

      <div className='flex-1'>
        {searchResults.slice(1).map((eachResult) => (
          <SuggestedVideoCard eachResult={eachResult} key={eachResult.id.videoId} />
        ))}
      </div>
      <CommentsContainer />
    </div>
  );
}

export default Video;
