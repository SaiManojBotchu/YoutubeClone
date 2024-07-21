import { useEffect, useState } from 'react';
import formatViews from '../../utils/formatViews';
import userIcon from '../../images/avatar.png';
import { comments_API } from '../../utils/constants';
import DOMPurify from 'dompurify';

const CommentsSection = () => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, []);

  const getCommentsData = async () => {
    try {
      const res = await fetch(comments_API);
      const data = await res.json();
      await setCommentsData(data.items);
      // console.log(commentsData);
    } catch (e) {
      console.log('CommentsSection - Error');
    }
  };

  return (
    <div className='inline-block absolute top-[83%] w-[65%]'>
      <p className='mb-4 font-bold text-lg'>{formatViews(130005)} Comments</p>
      <div className='flex mb-8'>
        <div className='mr-4'>
          <img src={userIcon} alt='userIcon' className='h-10 mr-4' />
        </div>
        <input type='text' value='Add a comment' />
      </div>
      {commentsData.map((item, index) => {
        return (
          <div className='flex items-start mb-6'>
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt=''
              className='rounded-full w-9 mt-0.5'
            />
            <div className='ml-3.5'>
              <div className='flex items-center mb-1'>
                <h3 className='text-[13px] font-medium'>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                </h3>
                <p className='ml-1 text-slate-500 text-xs font-medium'>2 months ago</p>
              </div>
              {/* to sanitize the HTML content before rendering it. */}
              <div
                className='text-[13px] mb-1.5'
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    item.snippet.topLevelComment.snippet.textDisplay
                  )
                }}
              />
              <div className='flex items-center'>
                <span className='material-symbols-outlined'>thumb_up</span>
                <span className='ml-1 mr-3 text-slate-500 text-xs font-medium'>
                  {item.snippet.topLevelComment.snippet.likeCount}
                </span>
                <span className='material-symbols-outlined'>thumb_down</span>
                <p className='ml-6 text-xs font-medium'>Reply</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsSection;
