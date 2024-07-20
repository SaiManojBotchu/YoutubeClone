/* comment component for just one comment */
const Comment = ({data}) => {
    const {name, text } = data;
    return (
        <div className="bg-gray-200 p-2 my-2 inline-block">
            <p className="text-bold py-1">{name}</p>
            <p>{text}</p>
        </div>
    )
}

export default Comment;