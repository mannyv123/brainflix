import CommentCard from "../CommentCard/CommentCard";
import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import { apiUrl } from "../../pages/VideoPage/VideoPage";
import { apiKey } from "../../pages/VideoPage/VideoPage";
import axios from "axios";

/* Displays a form to submit comments for the currently playing/selected video; 
renders any existing comments for the current video using CommentCard component */
function Comments(props) {
    //function to handle form submission
    const handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.comment.value);

        const newComment = {
            name: "Logged In User",
            comment: event.target.comment.value,
        };

        console.log(props.currentVideo.id);
        console.log(props.videoId);

        // let uploadId = "";

        // if (!props.videoId) {
        //     console.log("it doesnt exist");
        //     uploadId = props.currentVideo.id;
        // } else {
        //     uploadId = props.videoId;
        // }

        //Axios call to post new comment and then re-render current video details
        axios
            .post(`${apiUrl}/videos/${props.currentVideo.id}/comments?api_key=${apiKey}`, newComment)
            .then(() => {
                console.log(props.videoId);
                props.getCurrentVideo(props.currentVideo.id);
            });
    };

    //Checks to see if currentVideo comments have been loaded yet
    if (!props.currentVideo.comments) {
        console.log("im returning because theres no comments");
        return;
    }

    //Determine number of comments
    const commentCount = props.currentVideo.comments.length;

    //Sort comments from latest to oldest
    props.currentVideo.comments.sort((firstComment, lastComment) => {
        return lastComment.timestamp - firstComment.timestamp;
    });
    console.log("Now I can render comments because there is a current video");

    return (
        <section className="comments">
            <p className="comments__count">{`${commentCount} ${
                commentCount > 1 ? "Comments" : "Comment"
            }`}</p>
            <div className="comments__form-container">
                <div className="comments__avatar"></div>
                <form
                    action="submit"
                    className="comments__form"
                    onSubmit={(event) => handleCommentsSubmit(event)}
                >
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
