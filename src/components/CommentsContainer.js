import CommentsList from './CommentsList';
import { commentsData } from '../utils/commentsData';

/* BUILDING N-LEVEL NESTED COMMENTS */

const CommentsContainer = () => {
  return (
    <div
      className='inline-block absolute top-[80%] ml-3
        py-2 px-4 w-[45%]'>
      <p className='mb-4 font-bold text-2xl'>COMMENTS</p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
