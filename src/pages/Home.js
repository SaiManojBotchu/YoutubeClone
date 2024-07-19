import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import ButtonList from '../components/ButtonList';
import { ytAPI } from '../utils/constants';

function Home() {
  const [vidoes, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(ytAPI);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (vidoes.length <= 0) return null;

  return (
    <div className='flex flex-col px-10'>
      <ButtonList />
      <div className='flex flex-wrap items-center'>
        {vidoes.map((video) => (
          <VideoCard video={video} key={video.snippet.thumbnails.medium.url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
