import "./CommentCard.scss";
import timeAgo from "../../utils/timeAgo";

/* Component to be used for each comment for currently selected/playing video */
function CommentCard({ comment, handleCommentsDelete, videoId }) {
    const timeSincePost = timeAgo(new Date(Date.now()), comment.timestamp);
    return (
        <li className="comment">
            <div className="comment__avatar"></div>
            {/* <img src="" alt="" className="comment__avatar" /> */}
            <div className="comment__content-container">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__timestamp">{timeSincePost}</p>
                <p className="comment__text">{comment.comment}</p>
                <p
                    onClick={() => {
                        handleCommentsDelete(videoId, comment.id);
                    }}
                >
                    DELETE
                </p>
            </div>
        </li>
    );
}

export default CommentCard;
