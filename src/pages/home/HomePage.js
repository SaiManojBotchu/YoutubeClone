import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import ButtonList from './ButtonList';
import { YT_API } from '../../utils/constants';

function Home() {
  const [vidoes, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetch(YT_API);
      const json = await data.json();
      // console.log(json);
      setVideos(json.items);
    } catch (e) {
      console.log('Home.js - Error');
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (vidoes.length <= 0) return null;

  return (
    <div className='flex flex-col mx-8'>
      <ButtonList />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
        {vidoes.map((video) => (
          <VideoCard video={video} key={video.snippet.thumbnails.medium.url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
