import CommentCard from "../CommentCard/CommentCard";
import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";

/* Displays a form to submit comments for the currently playing/selected video; 
renders any existing comments for the current video using CommentCard component */
function Comments(props) {
    if (!props.currentVideo.comments) {
        console.log("im returning");
        return;
    }

    const commentCount = props.currentVideo.comments.length;

    return (
        <section className="comments">
            <p className="comments__count">{`${commentCount} ${
                commentCount > 1 ? "Comments" : "Comment"
            }`}</p>
            <div className="comments__form-container">
                <div className="comments__avatar"></div>
                {/* no action in form as per sprint-2 requirements, functionality of the form not required */}
                <form action="" className="comments__form">
                    <label htmlFor="comment" className="comments__label">
                        Join the Conversation
                    </label>
                    <textarea
                        name="comment"
                        id="comment"
                        className="comments__input"
                        placeholder="Add a new comment"
                    ></textarea>
                    <button className="button button__comment" type="submit">
                        <img src={commentIcon} alt="comment icon" className="button__comment-icon" />
                        Comment
                        <div className="button__comment-icon button--hidden"></div>
                    </button>
                </form>
            </div>
            <ul className="comments__list">
                {props.currentVideo.comments.map((comment) => {
                    return (
                        <CommentCard
                            key={comment.id}
                            name={comment.name}
                            timestamp={comment.timestamp}
                            comment={comment.comment}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default Comments;
