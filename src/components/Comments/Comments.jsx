import CommentCard from "../CommentCard/CommentCard";
import "./Comments.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import { API_URL } from "../../pages/VideoPage/VideoPage";
import axios from "axios";
import { useEffect, useState } from "react";

/* Displays a form to submit comments for the currently playing/selected video; 
renders any existing comments for the current video using CommentCard component */
function Comments({ currentVideo, getCurrentVideo }) {
    const [comment, setComment] = useState("");
    const [isBlank, setIsBlank] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [commentCount, setCommentCount] = useState(0);

    //function to handle textarea input change
    const handleInputChange = (event) => {
        setComment(event.target.value);
    };

    //Resets error msg when there is a change in the currentVideo prop (navigate to new page/video)
    useEffect(() => {
        setIsBlank(false);
    }, [currentVideo]);

    //function to handle form submission
    const handleCommentsSubmit = (event) => {
        event.preventDefault();

        //Form validation - checks to see if comment input blank
        if (comment !== "") {
            const newComment = {
                comment: comment,
            };

            //Axios call to post new comment and then re-render current video details
            axios
                .post(`${API_URL}/videos/${currentVideo.id}/comments`, newComment)
                .then(() => {
                    getCurrentVideo(currentVideo.id);
                    setComment("");
                })
                .catch((error) => {
                    console.error(error);
                });
            setIsBlank(false);
        } else {
            setIsBlank(true);
        }
    };

    //Function to delete comments from api
    const handleCommentsDelete = (videoId, commentId) => {
        axios
            .delete(`${API_URL}/videos/${videoId}/comments/${commentId}`)
            .then(() => {
                getCurrentVideo(currentVideo.id);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //Checks to see if currentVideo comments have been loaded yet; displays loading when still loading
    useEffect(() => {
        if (!currentVideo.comments) {
            setIsLoading(true);
        } else {
            setIsLoading(false);

            //Determine number of comments
            setCommentCount(currentVideo.comments.length);

            //Sort comments from latest to oldest
            currentVideo.comments.sort((firstComment, lastComment) => {
                return lastComment.timestamp - firstComment.timestamp;
            });
        }
    }, [currentVideo]);

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
                        className={`comments__input ${!isBlank ? "" : "comments__input--error"}`}
                        placeholder="Add a new comment"
                        onChange={handleInputChange}
                        value={comment}
                    ></textarea>
                    {isBlank ? (
                        <p className="comments__input--error-msg">Comment form cannot be blank</p>
                    ) : (
                        ""
                    )}
                    <button className="button button__comment" type="submit">
                        <img src={commentIcon} alt="comment icon" className="button__comment-icon" />
                        Comment
                        <div className="button__comment-icon button--hidden"></div>
                    </button>
                </form>
            </div>
            {isLoading ? (
                <p className="comments__loading">Loading . . .</p>
            ) : (
                <ul className="comments__list">
                    {currentVideo.comments.map((comment) => {
                        return (
                            <CommentCard
                                key={comment.id}
                                comment={comment}
                                handleCommentsDelete={handleCommentsDelete}
                                videoId={currentVideo.id}
                            />
                        );
                    })}
                </ul>
            )}
        </section>
    );
}

export default Comments;
