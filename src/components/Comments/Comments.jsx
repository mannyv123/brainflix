import CommentCard from "../CommentCard/CommentCard";
import "./Comments.scss";

function Comments(props) {
    const commentCount = props.currentVideo.comments.length;

    return (
        <section className="comments">
            <p className="comments__count">{`${commentCount} ${
                commentCount > 1 ? "comments" : "comment"
            }`}</p>
            <div className="comments__form-container">
                <img src="" alt="" className="comments__avatar" />
                <form action="" className="comments__form">
                    <label htmlFor="comment">Join the Conversation</label>
                    <textarea name="comment" id="comment" className="comments__input"></textarea>
                    <button type="submit">Comment</button>
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
