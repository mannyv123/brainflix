import CommentCard from "../CommentCard/CommentCard";
import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import { apiUrl } from "../../pages/VideoPage/VideoPage";
import { apiKey } from "../../pages/VideoPage/VideoPage";
import axios from "axios";
import { useEffect, useState } from "react";

/* Displays a form to submit comments for the currently playing/selected video; 
renders any existing comments for the current video using CommentCard component */
function Comments({ currentVideo, getCurrentVideo }) {
    const [comment, setComment] = useState("");
    const [isBlank, setIsBlank] = useState(false);

    //function to handle textarea input change
    const handleInputChange = (event) => {
        setComment(event.target.value);
        console.log(comment);
    };

    useEffect(() => {
        setIsBlank(false);
    }, [currentVideo]);

    //function to handle form submission
    const handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log(comment);

        if (comment !== "") {
            const newComment = {
                name: "Anonymous User",
                comment: comment,
            };

            console.log(currentVideo.id);

            //Axios call to post new comment and then re-render current video details
            axios
                .post(`${apiUrl}/videos/${currentVideo.id}/comments?api_key=${apiKey}`, newComment)
                .then(() => {
                    getCurrentVideo(currentVideo.id);
                });
            setIsBlank(false);
        } else {
            setIsBlank(true);
        }
    };

    //see if i can change comments state instead of doing another api call**************
    const handleCommentsDelete = (videoId, commentId) => {
        console.log("I clicked delete");
        console.log("videoId: ", videoId);
        console.log("commentId: ", commentId);
        axios
            .delete(`${apiUrl}/videos/${videoId}/comments/${commentId}?api_key=${apiKey}`)
            .then((response) => {
                console.log(response);
                getCurrentVideo(currentVideo.id);
            });
    };

    //Checks to see if currentVideo comments have been loaded yet
    if (!currentVideo.comments) {
        console.log("im returning because theres no comments");
        return;
    }

    //Determine number of comments
    const commentCount = currentVideo.comments.length;

    //Sort comments from latest to oldest
    currentVideo.comments.sort((firstComment, lastComment) => {
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
                        onChange={handleInputChange}
                        value={comment}
                    ></textarea>
                    {isBlank ? <p className="comments__error-msg">Comment form cannot be blank</p> : ""}
                    <button className="button button__comment" type="submit">
                        <img src={commentIcon} alt="comment icon" className="button__comment-icon" />
                        Comment
                        <div className="button__comment-icon button--hidden"></div>
                    </button>
                </form>
            </div>
            <ul className="comments__list">
                {currentVideo.comments.map((comment) => {
                    return (
                        <CommentCard
                            key={comment.id}
                            name={comment.name}
                            timestamp={comment.timestamp}
                            comment={comment.comment}
                            handleCommentsDelete={handleCommentsDelete}
                            videoId={currentVideo.id}
                            commentId={comment.id}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default Comments;
