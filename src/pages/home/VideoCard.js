import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { YT_API } from '../../utils/constants';
import { inputJSONData } from '../../redux/searchResultsSlice';
import formatTime from '../../utils/formatTime';
import formatViews from '../../utils/formatViews';

function VideoCard({ video }) {
  const { snippet, statistics } = video;
  const { thumbnails } = snippet;
  const dispatch = useDispatch();

  const getVideoRecommendations = async () => {
    const res = await axios(YT_API);
    dispatch(inputJSONData(res.data));
  };

  return (
    <Link to={`/watch?v=${video.id}`}>
      <div
        className='mb-16 w-full h-auto rounded-2xl text-sm overflow-y-hidden'
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
