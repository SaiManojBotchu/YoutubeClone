import React from 'react';
import { Link } from 'react-router-dom';
import { ytQuerySearchAPI } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { inputJSONData } from '../utils/searchResultsSlice';

const VideoCard = ({ video }) => {

  const dispatch = useDispatch();

  const { snippet, statistics } = video;

  const { thumbnails } = snippet;

  const getVideoRecommendations = async () => {
    const data = await fetch(
      ytQuerySearchAPI +
        snippet.channelTitle +
        '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
    );
    const json = await data.json();
    dispatch(inputJSONData(json));
  };

  return (
    <Link to={'/watch?v=' + video.id}>
    
      {/* pass in the correct video id in the url so that you can read the video id from that url
      in the watch page which enables you to play that video */}

      {/* This div is the each video card */}
      <div
        className='m-2 w-[20rem] shadow-lg h-[21rem] rounded-md text-sm overflow-y-hidden'
        onClick={getVideoRecommendations}>
        <img
          src={thumbnails.medium.url}
          alt='video-thumbnail'
          className='rounded-lg hover:cursor-pointer p-1'
        />
        <ul className='mt-2 ml-1'>
          <li className='font-semibold'>{snippet.title}</li>
          <li className='my-2'>{snippet.channelTitle + '☑️'}</li>
          <li>{statistics.viewCount} Views</li>
        </ul>
      </div>
    </Link>
  );
};

export default VideoCard;
