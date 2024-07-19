import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ytQuerySearchAPI } from '../utils/constants';
import { inputJSONData } from '../redux/searchResultsSlice';
import timeAgo from '../utils/timeAgo';
import formatViews from '../utils/formatViews';

function VideoCard({ video }) {
  const dispatch = useDispatch();

  const { snippet, statistics } = video;

  const { thumbnails } = snippet;
  // console.log(video);

  const getVideoRecommendations = async () => {
    const res = await fetch(
      ytQuerySearchAPI +
        snippet.channelTitle +
        '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
    );
    const data = await res.json();

    dispatch(inputJSONData(data));
  };

  return (
    <Link to={`/watch?v=${video.id}`}>
      <div
        className='m-2 w-[20rem] h-[21rem] rounded-2xl text-sm overflow-y-hidden '
        onClick={getVideoRecommendations}>
        <img
          src={thumbnails.maxres.url}
          alt='video-thumbnail'
          className='rounded-lg hover:cursor-pointer'
        />
        <div className='mt-3 px-1'>
          <p className='mb-2 line-clamp-2 font-semibold'>{snippet.title}</p>
          <div className='text-neutral-500 font-medium'>
            <p>{snippet.channelTitle}</p>
            <p>
              {formatViews(statistics.viewCount)} views • {timeAgo(snippet.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
