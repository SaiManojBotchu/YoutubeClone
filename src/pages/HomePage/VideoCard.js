import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ytQuerySearchAPI, ytAPI } from '../../utils/constants';
import { inputJSONData } from '../../redux/searchResultsSlice';
import formatTime from '../../utils/formatTime';
import formatViews from '../../utils/formatViews';

function VideoCard({ video }) {
  const dispatch = useDispatch();

  const { snippet, statistics } = video;

  const { thumbnails } = snippet;
  // console.log(video);

  const getVideoRecommendations = async () => {
    // let temp =
    //   ytQuerySearchAPI +
    //   snippet.channelTitle +
    //   '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI';
    const res = await fetch(ytAPI);

    const data = await res.json();
    // console.log(data);
    dispatch(inputJSONData(data));
  };

  return (
    <Link to={`/watch?v=${video.id}`}>
      <div
        className='m-2 mb-16 w-full h-auto rounded-2xl text-sm overflow-y-hidden'
        onClick={getVideoRecommendations}>
        <img
          src={thumbnails.maxres?.url || thumbnails.medium.url}
          alt='video-thumbnail'
          className='rounded-lg hover:cursor-pointer w-full'
        />
        <div className='mt-3 px-1'>
          <p className='mb-2 line-clamp-2 font-semibold'>{snippet.title}</p>
          <div className='text-neutral-500 font-medium'>
            <p>{snippet.channelTitle}</p>
            <p>
              {formatViews(statistics.viewCount)} views •{' '}
              {formatTime(snippet.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
