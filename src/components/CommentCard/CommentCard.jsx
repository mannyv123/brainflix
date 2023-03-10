import "./CommentCard.scss";
import timeAgo from "../../utils/timeAgo";
import deleteIcon from "../../assets/icons/icon-delete.svg";

/* Component to be used for each comment for currently selected/playing video */
function CommentCard({ comment, handleCommentsDelete, videoId }) {
    const timeSincePost = timeAgo(new Date(Date.now()), comment.timestamp);
    return (
        <li className="comment">
            <div className="comment__avatar"></div>
            <div className="comment__content-container">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__timestamp">{timeSincePost}</p>
                <p className="comment__text">{comment.comment}</p>
                <img
                    className="comment__delete"
                    src={deleteIcon}
                    alt="Delete"
                    onClick={() => {
                        handleCommentsDelete(videoId, comment.id);
                    }}
                />
            </div>
        </li>
    );
}

export default CommentCard;
