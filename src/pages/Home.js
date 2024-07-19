import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import ButtonList from '../components/ButtonList';
import { ytAPI } from '../utils/constants';

function Home() {
  const [vidoes, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(ytAPI);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (vidoes.length <= 0) return null;

  return (
    <div className='flex flex-col px-10'>
      <ButtonList />
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
        {vidoes.map((video) => (
          <VideoCard video={video} key={video.snippet.thumbnails.medium.url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
