/* Pass in a list of comments and it will list down all the comments*/

import Comment from "./Comment";

/* I am collecting all the comments data here */
const CommentsList = ({comments}) => {
    return (
        comments.map((comment) => (
            <div>
                {/* For each comment just display the comment*/}
                <Comment data = {comment}/>
                {/* For the above comment if there are any replies it should come below.
                But these replies are again an array of comments. Again in that array of comments
                if you will have replies and so on. So, here it is better to apply recursion */}
                <div className="ml-4">
                    <CommentsList comments = {comment.replies}/>
                </div>
            </div>
        ))
    )
}

export default CommentsList;