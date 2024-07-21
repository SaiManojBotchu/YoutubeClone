import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import youtube_logo from '../../images/youtube.png';

export default function IconComponent({ toggleSideBarMenuHandler }) {
  return (
    <div className='flex items-center'>
      <MenuIcon
        className='hover:cursor-pointer mr-3'
        onClick={toggleSideBarMenuHandler}
      />
      <Link to={'/'}>
        <img src={youtube_logo} alt='yt_logo' className='h-[30px]' />
      </Link>
    </div>
  );
}
