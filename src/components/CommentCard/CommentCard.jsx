import "./CommentCard";

function CommentCard(props) {
    return (
        <li className="comment">
            <img src="" alt="" className="comment__avatar" />
            <div className="comment__content-container">
                <p className="comment__name">{props.name}</p>
                <p className="comment__timestamp">{props.timestamp}</p>
                <p className="comment__text">{props.comment}</p>
            </div>
        </li>
    );
}

export default CommentCard;
